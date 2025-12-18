<?php

namespace App\Http\Controllers;

use App\Events\VerifiedStatusPrivateNotification;
use App\Models\Bluemark;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\VerifiedAccountInfo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class VerifiedAccountInfoController extends Controller
{
    public function store(Request $request)
    {
        if ($request->hasFile('governmentImage') && $request->hasFile('selfieImage')) {
            $governmentOriginalName = Str::random(10) . '_' . $request->file('governmentImage')->getClientOriginalName();
            $salfieImageOriginalName = Str::random(10) . '_' . $request->file('selfieImage')->getClientOriginalName();
            $governmentImageFilePath = $request->file('governmentImage')->storeAs('governmentImageFolder', $governmentOriginalName, 'public');
            $salfieImageFilePath = $request->file('selfieImage')->storeAs('selfieImageFolder', $salfieImageOriginalName, 'public');

            $request->user()->verifiedacountinfo()->create([
                'username' => $request->username,
                // 'user_id' => $request->user_id,
                'date_of_birth' => $request->date_of_birth,
                'legal_name' => $request->legal_name,
                'government_image' => $governmentImageFilePath,
                'selfie_image' => $salfieImageFilePath
            ]);
        }
        return redirect()->route('account.bluemark.verified.dashboard', ['id' =>  Auth::id()]);
    }
    public function update(Request $request)
    {
        $info = VerifiedAccountInfo::where('user_id', $request->user_id)->firstOrFail();
        $bluemark = Bluemark::where('user_id' , $request->user_id)->first();
        if($request->status == 'rejected'){

            if(isset($info->government_image) && Storage::disk("public")->exists($info->government_image)){
                Storage::disk("public")->delete($info->government_image);
            }
            if(isset($info->selfie_image) && Storage::disk("public")->exists($info->selfie_image)) {
                Storage::disk("public")->delete($info->selfie_image);
            }
            if(isset($bluemark)){
                Bluemark::where('user_id' , $request->user_id)->delete();
            }

            $info->delete();
            VerifiedStatusPrivateNotification::dispatch($request->user_id);


        }

        if($request->status == "pending"){
            if(isset($bluemark)){
                 Bluemark::where('user_id' , $request->user_id)->delete();
            }
        }


        $info->update([
            'status' => $request->status
        ]);

        if ($info->status == "success" && $request->status == "success") {
            if(!isset($bluemark)){
                Bluemark::create([
                    'bluemark' => true,
                    'user_id' => $request->user_id
                ]);
            }
            VerifiedStatusPrivateNotification::dispatch($request->user_id);
        }
        return redirect()->route("admin.verifications");
    }
}
