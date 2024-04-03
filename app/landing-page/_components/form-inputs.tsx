import { Input } from "$/components/ui/input";
import { Textarea } from "$/components/ui/textarea";
import { Send } from "lucide-react";
import useContactUs from "$/stores/us-contact-us";
export default function FormInputs() {
  const { formData, setFormData } = useContactUs();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="uppercase flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="John Doe"
          required
          className="bg-blue-900/40 placeholder:text-zinc-400 border border--white/30 outline-none !ring-0 ring-offset-transparent"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          required
          placeholder="someone@domain.com"
          className="bg-blue-900/40 placeholder:text-zinc-400 border border--white/30 outline-none !ring-0 ring-offset-transparent"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          placeholder="type your message"
          required
          name="message"
          onChange={(e) => handleChange(e)}
          className="bg-blue-900/40 placeholder:text-zinc-400 border border--white/30 outline-none !ring-0 ring-offset-transparent"
        />
      </div>
      <button
        type="submit"
        aria-label="form-submit button"
        className="bg-blue-900/40 flex items-center gap-2 px-4 py-2 self-start rounded-full"
      >
        <span>SUBMIT</span>
        <span>
          <Send className="rotate-45" size={20} />
        </span>
      </button>
    </div>
  );
}
