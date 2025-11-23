import Image from "next/image";
import Link from "next/link";

export function Banner() {
    return (
        <div className="relative w-full overflow-hidden rounded-xl bg-[#F5F7FA] p-4">
            <div className="absolute -right-8 -top-8 pointer-events-none">
                <Image
                    src="/subscriptions/image.png"
                    alt="Background"
                    width={144}
                    height={144}
                    className="object-contain opacity-100 pointer-events-none"
                />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
                <div className="h-8 w-8">
                    <Image
                        src="/subscriptions/icon.png"
                        alt="Apple Music"
                        width={32}
                        height={32}
                        className="pointer-events-none"
                    />
                </div>
                <div className="flex flex-col gap-0.5">
                    <div className="font-medium text-[#0E121B] text-[14px] leading-5 tracking-[-0.006em]">
                        50% discount on Apple Music
                    </div>
                    <div className="font-normal text-[#525866] text-[12px] leading-4">
                        For only $4.99 per month! <Link href="#" className="underline decoration-solid underline-offset-auto">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
