import Slider from "@/components/slider/Slider";
import Actions from "@/components/Actions";

export default function Home() {
    return (
        <main className={'w-full mx-auto mb-20'}>
            <Slider/>
            <div className={'px-[max(12px, calc((100% -1208px)/2))] ' +
                'flex flex-col gap-y-20 md:mb-2.5 xl:mb-30'}>
                <Actions/>
            </div>
        </main>
    );
}
