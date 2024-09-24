
import { MultiStepLoaderDemo } from "@/components/multi-step-loader";
import { Cover } from "@/components/ui/cover"

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="h-[40rem] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-1 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Welcome to Borrow <br /> chats <Cover>Get started</Cover>
          </h1>
        </div>
        <div>
          <MultiStepLoaderDemo />
        </div>
      </div>
    </div>
  );
};

export default Home;
