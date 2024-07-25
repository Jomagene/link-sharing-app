"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
  emailAddress: z.string().email({ message: "Can't be empty" }),
  password: z.string().min(8, { message: "Please check again" }),
});

export default function Home() {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  async function handleSubmit(data: {
    emailAddress: string;
    password: string;
  }) {
    setLoginError(null);
    setLoading(true);
    if (!data) return;
    try {
      const credential = await signInWithEmailAndPassword(
        getAuth(app),
        data.emailAddress,
        data.password
      );

      const idToken = await credential.user.getIdToken();

      await fetch("/api/login", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      router.push("/");
    } catch (e) {
      setLoginError("Your email or password is wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex items-center justify-center text-[#333333] h-[100vh]">
      <div className="w-[476px] flex flex-col gap-[51px]">
        <section className="w-full flex items-start justify-center">
          <Image src="/icons/logo.svg" width={182} height={40} alt="logo" />
        </section>

        <section className="w-full rounded-xl bg-white p-10 flex flex-col gap-6">
          <div className="flex- flex-col gap-2">
            <h1 className="text-[32px] font-bold">Login</h1>
            {loginError ? (
              <p className="text-[16px] text-[#FF3939] font-normal">
                {loginError}
              </p>
            ) : (
              <p className="text-[16px] text-[#737373] font-normal">
                Add your details below to get back into the app
              </p>
            )}
          </div>
          <div className="flex- flex-col gap-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="max-w-md w-full flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field, fieldState }) => (
                    <FormItem className="flex- flex-col gap-1 relative">
                      <FormLabel className="text-xs">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. alex@email.com"
                          type="email"
                          {...field}
                          className="text-sm focus:border-none focus:!outline-[#633CFF] focus:shadow-shadowInput pl-7"
                        />
                      </FormControl>
                      {fieldState.error && (
                        <FormMessage className="text-[#FF3939] absolute top-8 right-3">
                          Can't be empty
                        </FormMessage>
                      )}
                      <Image
                        src="/icons/enveloppe.svg"
                        width={16}
                        height={16}
                        alt="email input"
                        className="top-9 left-2 absolute"
                      />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field, fieldState }) => (
                    <FormItem className="flex- flex-col gap-1 relative">
                      <FormLabel className="text-xs">Create password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="At least 8 characters"
                          type="password"
                          {...field}
                          className={`text-sm focus:border-none focus:!outline-[#633CFF] focus:shadow-shadowInput pl-7`}
                        />
                      </FormControl>
                      {fieldState.error && (
                        <FormMessage className="text-[#FF3939] absolute top-8 right-3">
                          Please check again
                        </FormMessage>
                      )}
                      <Image
                        src="/icons/lock-key.svg"
                        width={16}
                        height={16}
                        alt="password input"
                        className="top-9 left-2 absolute"
                      />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#633CFF] text-white active:opacity-25 flex items-center justify-center">
                  {loading ? (
                    <LoaderCircle className="animate-spin w-5 h-5" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </Form>
            <p className="text-sm pt-6 text-center">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#633CFF] sm:inline block">
                Create account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
