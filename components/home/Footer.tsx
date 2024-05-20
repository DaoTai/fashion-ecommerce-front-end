import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Logo from "../Header/Logo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-[160px] w-screen bg-slate-100 pb-[88px]">
      <div className="container relative pt-[120px]">
        {/* Form box */}
        <div className="container absolute -top-1/2 left-0 flex translate-y-1/2 flex-wrap items-center rounded-3xl bg-black px-4  py-9 md:px-16">
          <div className="basis-full md:basis-1/2">
            <h1 className="text-[40px] font-extrabold text-white">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
          </div>
          {/* Form */}
          <form className="flex basis-full flex-col flex-wrap items-start space-y-5 md:basis-1/2 md:items-end">
            <div className="flex w-full items-center gap-2 rounded-3xl bg-white px-4 py-3 md:w-2/3">
              <MailIcon className="text-black/40" />
              <input
                type="text"
                placeholder="Enter your email address"
                className=" w-full border-none bg-transparent outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-white px-4  py-3 font-semibold text-black md:w-2/3"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 gap-2 border-b-2 border-black/10 pb-[50px] md:grid-cols-5">
          <div className="flex flex-1 flex-col justify-between">
            <Logo />
            <p className="text-black/60">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/">
                <TwitterIcon className="size-9 rounded-full border border-slate-500 bg-white p-1.5 text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white" />
              </Link>
              <Link href="/">
                <FacebookIcon className="size-9 rounded-full border border-slate-500 bg-white p-1.5 text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white" />
              </Link>
              <Link href="/">
                <InstagramIcon className="size-9 rounded-full border border-slate-500 bg-white p-1.5 text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white" />
              </Link>
              <Link href="/">
                <GithubIcon className="size-9 rounded-full border border-slate-500 bg-white p-1.5 text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white" />
              </Link>
            </div>
          </div>
          {/* Company */}
          <div className="space-y-6">
            <h1 className="font-bold uppercase tracking-wider">Company</h1>
            <Link href="/" className="block text-black/60">
              About
            </Link>
            <Link href="/" className="block text-black/60">
              Features
            </Link>
            <Link href="/" className="block text-black/60">
              Works
            </Link>
            <Link href="/" className="block text-black/60">
              Career
            </Link>
          </div>
          <div className="space-y-6">
            <h1 className="font-bold uppercase tracking-wider">Help</h1>
            <Link href="/" className="block text-black/60">
              Customer Support
            </Link>
            <Link href="/" className="block text-black/60">
              Delivery Detail
            </Link>
            <Link href="/" className="block text-black/60">
              Term & Conditions
            </Link>
            <Link href="/" className="block text-black/60">
              Privacy Policy
            </Link>
          </div>
          <div className="space-y-6">
            <h1 className="font-bold uppercase tracking-wider">FAQ</h1>
            <Link href="/" className="block text-black/60">
              Account
            </Link>
            <Link href="/" className="block text-black/60">
              Manage Deliveries
            </Link>
            <Link href="/" className="block text-black/60">
              Orders
            </Link>
            <Link href="/" className="block text-black/60">
              Payments
            </Link>
          </div>
          <div className="space-y-6">
            <h1 className="font-bold uppercase tracking-wider">Resources</h1>
            <Link href="/" className="block text-black/60">
              Free eBooks
            </Link>
            <Link href="/" className="block text-black/60">
              Development Tutorial
            </Link>
            <Link href="/" className="block text-black/60">
              How to - Blog
            </Link>
            <Link href="/" className="block text-black/60">
              Youtube Playlist
            </Link>
          </div>
        </div>

        {/* Copy right & payments */}
        <div className="mt-6 flex justify-between">
          <span>© 2000-2021, All rights reserved</span>
          <div className="flex items-center">
            <Image
              unoptimized
              src="/img/footer-visa-1.png"
              alt="payment"
              width={46}
              height={30}
              className="h-14 w-full"
            />
            <Image
              unoptimized
              src="/img/footer-visa-2.png"
              alt="payment"
              width={46}
              height={30}
              className="h-14 w-full"
            />
            <Image
              unoptimized
              src="/img/footer-paypal.png"
              alt="payment"
              width={46}
              height={30}
              className="h-14 w-full"
            />
            <Image
              unoptimized
              src="/img/footer-apple.png"
              alt="payment"
              width={46}
              height={30}
              className="h-14 w-full"
            />
            <Image
              unoptimized
              src="/img/footer-google.png"
              alt="payment"
              width={46}
              height={30}
              className="h-14 w-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
