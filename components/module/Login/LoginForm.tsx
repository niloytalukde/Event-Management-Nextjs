/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { CardAction, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";


const LoginForm = () => {

const [state, formAction,isPending] = useActionState(()=>{},null)

console.log(state,isPending);
  return (
    <div className="">
      <form id="login" action={formAction}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
        </div>
      </form>
      <Button form="login" type="submit" className="w-full mt-4" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </Button>
      <CardAction className="justify-center mt-4">
        <Button variant="link"> Sign Up</Button>
      </CardAction>
    </div>
  );
};

export default LoginForm;
