import SignUpFormProvider from "@/components/forms/sign-up/form-provider";

import React from "react";

const SignUp = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div>
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-gray-500">
              Already have an account?{" "}
              <a href="/auth/sign-in" className="text-blue-500">
                Sign In
              </a>
            </p>
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
