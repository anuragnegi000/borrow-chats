"use client";
import { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom"; 

const loadingStates = [
  { text: "Setting up your profile" },
  { text: "Setting up a unique name" },
  { text: "Welcome to Borrow chats" },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleLoading = () => {
    setLoading(true);
  };

  const handleLoadingComplete = () => {
    setLoading(false);
    navigate("/chats");
  };

  return (
    <div className="w-full flex justify-center">
      {/* Core Loader Modal */}
      <Loader
        loadingStates={loadingStates}
        loading={loading}
        duration={2000}
        onComplete={handleLoadingComplete} 
      />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={handleLoading}
        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to load
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
