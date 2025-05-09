import { Button } from "@/components/ui/button"
import {Input } from "@/components/ui/input"
import Link from "next/link"



const LoginForm = () => {
	return (
		<>
		<div className="h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Login Form Section */}
      <div className="flex flex-col justify-center relative p-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-semibold">Recon</span>
            <Link 
              href="/signup" 
              className="text-sm text-primary hover:underline"
            >
              Create account
            </Link>
          </div>
          
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="mt-2 text-muted-foreground">Sign in to continue</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-4">
            <div>
              <Input
                type="tel"
                placeholder="Mobile number"
                // value={mobileNumber}
                // onChange={(e) => setMobileNumber(e.target.value)}
                className="h-12 text-base"
              />
            </div>

            {/* {showOtpinput && ( */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  maxLength={6}
                //   value={otp}
                //   onChange={(e) => setOtp(e.target.value)}
                  className="h-12 text-base"
                />
                <div className="flex justify-end">
                  <Button
                //     variant="link"
                //     onClick={handleSendOtp}
                //     disabled={isLoading || resendCooldown > 0}
                    className="text-sm"
                  >
                    {/* {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : 'Resend OTP'} */}
                  </Button>
                </div>
              </div>
            {/* )} */}

            {/* {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div> */}
            {/* )} */}

            <Button
              className="w-full h-12 text-base"
        //             variant="outline"
        //       onClick={showOtpinput ? handleVerifyOtp : handleSendOtp}
        //       disabled={isLoading}
            >
              {/* {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  {showOtpinput ? "Verifying..." : "Sending..."}
                </div>
              ) : (
                showOtpinput ? "Verify OTP" : "Send OTP"
              )} */}
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Background Section */}
      <div className="hidden md:block relative p-8">
        <div 
          className="absolute inset-8 rounded-2xl bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/images/login.png')"
          }}
        />
        <div className="absolute bottom-12 right-10 text-sm text-white">
          © 2025 Recon. All rights reserved.
        </div>
      </div>
    </div>
		</>
	)
}

export default LoginForm