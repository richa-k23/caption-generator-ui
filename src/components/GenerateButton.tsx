
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

interface GenerateButtonProps {
  onClick: () => void;
  loading: boolean;
}

const GenerateButton = ({ onClick, loading }: GenerateButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={loading}
      className={`w-full py-6 font-semibold text-lg ${
        loading 
          ? "bg-gray-400 cursor-not-allowed" 
          : "bg-primary-purple hover:bg-dark-purple text-white"
      }`}
    >
      {loading ? (
        <span className="flex items-center">
          <Loader className="mr-2 h-5 w-5 animate-spin-slow" />
          Generating...
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Inspire Me
        </span>
      )}
    </Button>
  );
};

export default GenerateButton;
