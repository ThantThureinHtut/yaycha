import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./input-DS2-RFXY.js";
import { C as Card, a as CardHeader, d as CardContent, e as CardFooter, c as CardDescription } from "./card-CYRifSsD.js";
import { I as InputGroup, a as InputGroupAddon, b as InputGroupInput } from "./input-group-rYvaTNbT.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { Verified, Hourglass, UserCheck } from "lucide-react";
import { useState } from "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "react-textarea-autosize";
function BluemarkVerified() {
  const { auth } = usePage().props;
  const [governmentPreview, setgovernmentPreview] = useState();
  const [errorGovernmentPreview, seterrorGovernmentPreview] = useState("");
  const [errorSelfiePreview, seterrorSelfiePreview] = useState("");
  const [errorName, setErrorName] = useState("");
  const [selfiePreview, setselfiePreview] = useState();
  const { data, setData, post, processing, errors } = useForm({
    username: auth.user.username,
    user_id: auth.user.id,
    email: auth.user.email,
    date_of_birth: "",
    legal_name: "",
    governmentImage: null,
    selfieImage: null
  });
  const handleFileChange = (e, fileName, setPreviewFun, setError) => {
    const file = e.target.files[0];
    if (file) {
      const fileSize = file.size;
      const maxSizeBytes = 1 * 1024 * 1024;
      if (fileSize > maxSizeBytes) {
        setError("File Size can't over 1mb");
      } else {
        setError("");
        seterrorGovernmentPreview("");
        seterrorSelfiePreview("");
        setData(fileName, file);
        setPreviewFun(URL.createObjectURL(file));
      }
    } else {
      setError("");
    }
  };
  const nameValidFunction = (data2) => {
    const hasNumber = /[0-9]/.test(data2);
    const hasSymbol = /[^\w\s]/.test(data2);
    if (hasNumber || hasSymbol) {
      setErrorName("Name can't have the [0-9] , @!#$%");
    } else {
      setErrorName();
    }
    setData("legal_name", data2);
  };
  const verifiedSubmitHandler = (e) => {
    e.preventDefault();
    if (!errorGovernmentPreview && !errorSelfiePreview && !errorName) {
      post(route("account.bluemark.verified.store"));
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    auth.user.verified_status === "unverified" && /* @__PURE__ */ jsx(
      "form",
      {
        onSubmit: verifiedSubmitHandler,
        className: "container mx-auto w-full md:w-1/2 flex justify-center items-center min-h-screen ",
        encType: "multipart/form-data",
        children: /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: " text-blue-500 text-xl font-bold", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center ju gap-1", children: [
            /* @__PURE__ */ jsx(Verified, {}),
            /* @__PURE__ */ jsx("span", { children: "Verified Account" })
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm", children: /* @__PURE__ */ jsx("div", { children: errorName }) }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Full Legal Name:" }),
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  placeholder: "Enter your full legal name: ",
                  required: true,
                  onChange: (e) => nameValidFunction(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(InputGroupAddon, { children: "Date of Birth" }),
              /* @__PURE__ */ jsx(
                InputGroupInput,
                {
                  type: "date",
                  required: true,
                  placeholder: "Enter your full legal name: ",
                  onChange: (e) => setData(
                    "date_of_birth",
                    e.target.value
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm", children: /* @__PURE__ */ jsx("div", { children: errorGovernmentPreview }) }),
              /* @__PURE__ */ jsxs(InputGroup, { children: [
                /* @__PURE__ */ jsx(InputGroupAddon, { children: "Government-Issued ID" }),
                /* @__PURE__ */ jsx(
                  InputGroupInput,
                  {
                    type: "file",
                    required: true,
                    onChange: (e) => handleFileChange(
                      e,
                      "governmentImage",
                      setgovernmentPreview,
                      seterrorGovernmentPreview
                    )
                  }
                )
              ] }),
              governmentPreview && /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center border rounded-md", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: governmentPreview,
                  className: " size-1/2 ",
                  alt: "govermant_image"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm", children: /* @__PURE__ */ jsx("div", { children: errorSelfiePreview }) }),
              /* @__PURE__ */ jsxs(InputGroup, { children: [
                /* @__PURE__ */ jsx(InputGroupAddon, { children: "Selfie with ID" }),
                /* @__PURE__ */ jsx(
                  InputGroupInput,
                  {
                    type: "file",
                    required: true,
                    onChange: (e) => handleFileChange(
                      e,
                      "selfieImage",
                      setselfiePreview,
                      seterrorSelfiePreview
                    )
                  }
                )
              ] }),
              selfiePreview && /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center border rounded-md", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: selfiePreview,
                  className: " size-1/2 ",
                  alt: "selfie_image"
                }
              ) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              className: " bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-700 w-full",
              children: "verified"
            }
          ) })
        ] })
      }
    ),
    auth.user.verified_status === "pending" && /* @__PURE__ */ jsx("div", { className: "container mx-auto w-full md:w-1/2 flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col items-baseline rounded-none sm:rounded-lg", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 ", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-orange-400 p-2 rounded-full animate-spin", children: /* @__PURE__ */ jsx(Hourglass, { className: "text-white" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold text-orange-400", children: "Your verification is still pending" })
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { children: /* @__PURE__ */ jsx("span", { className: " text-justify", children: "Your BlueMark verification request has been submitted.Please wait while an admin reviews and approves it. This may take some time." }) }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Link, { href: "/home", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Go back" }) }) })
    ] }) }),
    auth.user.verified_status === "success" && /* @__PURE__ */ jsx("div", { className: "container mx-auto w-full md:w-1/2 flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col  rounded-none sm:rounded-lg", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex size-12 items-center justify-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inline-flex size-10 animate-ping rounded-full bg-green-400 opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex items-center justify-center size-12 p-2 rounded-full bg-green-500 text-white", children: /* @__PURE__ */ jsx(UserCheck, {}) })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-green-500 text-2xl font-bold", children: "Verification is successfully" })
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { children: /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-yellow-100 border border-yellow-300 text-yellow-800", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: "⚠️ Important Notice" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To maintain a respectful and safe community, all Bluemark users must follow our content guidelines. Posting",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "inappropriate, sexual, or offensive content" }),
          " ",
          "is strictly prohibited."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2", children: "If you violate these rules:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside mt-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "Your",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "Bluemark status" }),
            " may be removed"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Your ",
            /* @__PURE__ */ jsx("strong", { children: "account" }),
            " may be suspended or banned by the admin team"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Please post responsibly and help keep the platform safe for everyone." })
      ] }) }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Link, { href: "/home", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Go back" }) }) })
    ] }) })
  ] });
}
export {
  BluemarkVerified as default
};
