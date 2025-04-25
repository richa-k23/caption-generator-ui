
import { Card, CardContent } from "@/components/ui/card";
import { Loader } from "lucide-react";

interface CaptionDisplayProps {
  caption: string;
  loading: boolean;
  platform: string;
  style: string;
  topic: string;
}

const CaptionDisplay = ({ caption, loading, platform, style, topic }: CaptionDisplayProps) => {
  if (loading) {
    return (
      <div className="mt-6 flex justify-center items-center h-40">
        <div className="flex flex-col items-center">
          <Loader className="h-8 w-8 text-primary-purple animate-spin-slow" />
          <p className="mt-2 text-gray-500">Crafting the perfect caption for you...</p>
        </div>
      </div>
    );
  }

  if (!caption) {
    return null;
  }

  const getPlatformBgColor = () => {
    switch (platform) {
      case "instagram": return "bg-soft-pink";
      case "twitter": return "bg-soft-blue";
      case "linkedin": return "bg-soft-purple";
      case "facebook": return "bg-soft-blue";
      case "youtube": return "bg-soft-peach";
      default: return "bg-soft-purple";
    }
  };

  const getStyleBgColor = () => {
    switch (style) {
      case "professional": return "bg-soft-blue";
      case "casual": return "bg-soft-mint";
      case "friendly": return "bg-soft-peach";
      case "humorous": return "bg-soft-pink";
      case "enthusiastic": return "bg-soft-purple";
      default: return "bg-soft-mint";
    }
  };

  return (
    <Card className="mt-6 border border-gray-100 shadow-lg animate-fade-in">
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`${getPlatformBgColor()} px-3 py-1 rounded-full text-sm`}>
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </span>
          <span className={`${getStyleBgColor()} px-3 py-1 rounded-full text-sm`}>
            {style.charAt(0).toUpperCase() + style.slice(1)}
          </span>
        </div>
        
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-500">Topic: </span>
          <span className="text-sm font-medium text-gray-700">{topic}</span>
        </div>
        
        <div className="border-l-4 border-primary-purple pl-4 py-2">
          <p className="text-gray-700 whitespace-pre-wrap">{caption}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaptionDisplay;
