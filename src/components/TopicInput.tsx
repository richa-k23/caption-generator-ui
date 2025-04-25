
import { Input } from "@/components/ui/input";

interface TopicInputProps {
  onTopicChange: (topic: string) => void;
  value: string;
}

const TopicInput = ({ onTopicChange, value }: TopicInputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor="topic" className="text-sm font-medium text-gray-700">
        Tell us the Topic/Details of the Post
      </label>
      <Input
        id="topic"
        type="text"
        value={value}
        onChange={(e) => onTopicChange(e.target.value)}
        className="w-full bg-white border border-gray-200 focus:ring-2 focus:ring-primary-purple focus:border-primary-purple"
        placeholder="e.g., Course Completion, Product Launch, Company Event"
      />
    </div>
  );
};

export default TopicInput;
