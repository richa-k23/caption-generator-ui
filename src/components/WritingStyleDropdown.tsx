
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface WritingStyleDropdownProps {
  onStyleSelect: (style: string) => void;
  value: string;
}

const styles = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "friendly", label: "Friendly" },
  { value: "humorous", label: "Humorous" },
  { value: "enthusiastic", label: "Enthusiastic" }
];

const WritingStyleDropdown = ({ onStyleSelect, value }: WritingStyleDropdownProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor="writingStyle" className="text-sm font-medium text-gray-700">
        Writing Style
      </label>
      <Select value={value} onValueChange={onStyleSelect}>
        <SelectTrigger className="w-full bg-white border border-gray-200 focus:ring-2 focus:ring-primary-purple focus:border-primary-purple">
          <SelectValue placeholder="Select style" />
        </SelectTrigger>
        <SelectContent>
          {styles.map((style) => (
            <SelectItem key={style.value} value={style.value}>
              {style.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default WritingStyleDropdown;
