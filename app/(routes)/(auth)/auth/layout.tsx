import { REACT_CHILDREN_TYPE } from "@/types";

export default function LayoutSignIn({ children }: REACT_CHILDREN_TYPE) {
  return (
    <div className="grid min-h-svh md:grid-cols-2 p-4">
      <div className="flex items-center justify-center gap-4 p-6 md:p-10">
        {children}
      </div>
      <div className="hidden md:block bg-gradient-to-br from-redCustom to-orangeCustom rounded-xl items-center justify-center relative overflow-hidden">
        <div className="flex p-4 w-full h-full">
          <div className="bg-[url(/shapes/pattern-lines.svg)] w-full flex flex-col items-center justify-center">
            <div className="flex justify-center mb-3">
              <img
                src="/images/login/chat.png"
                alt="Chat Login"
                className="max-w-md"
              />
            </div>
            <div className="relative z-10 text-center text-white space-y-8">
              <div className="max-w-lg mx-auto">
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  Marketing Al Día
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  "Slogan de MAD"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
