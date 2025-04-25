
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ApiKeyModalProps {
  onSubmit: (apiKey: string) => void;
  open: boolean;
}

const ApiKeyModal = ({ onSubmit, open }: ApiKeyModalProps) => {
  const [key, setKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onSubmit(key.trim());
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enter Gemini API Key</DialogTitle>
          <DialogDescription>
            You need a Gemini API key to generate captions. You can get one from{" "}
            <a
              href="https://ai.google.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-primary-purple underline"
            >
              Google AI Studio
            </a>
            .
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <Input
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Paste your API key here"
              className="w-full"
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-primary-purple hover:bg-dark-purple">
              Save & Continue
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyModal;
