
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PlatformDropdownProps {
  onPlatformSelect: (platform: string) => void;
  value: string;
}

const platforms = [
  { value: "instagram", label: "Instagram" },
  { value: "twitter", label: "Twitter" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "facebook", label: "Facebook" },
  { value: "youtube", label: "YouTube" }
];

const PlatformDropdown = ({ onPlatformSelect, value }: PlatformDropdownProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor="platform" className="text-sm font-medium text-gray-700">
        Select a Platform
      </label>
      <Select value={value} onValueChange={onPlatformSelect}>
        <SelectTrigger className="w-full bg-white border border-gray-200 focus:ring-2 focus:ring-primary-purple focus:border-primary-purple">
          <SelectValue placeholder="Select platform" />
        </SelectTrigger>
        <SelectContent>
          {platforms.map((platform) => (
            <SelectItem key={platform.value} value={platform.value}>
              {platform.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PlatformDropdown;
