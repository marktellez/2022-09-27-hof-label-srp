import { useState } from "react";

import TextField from "@/ui/text-field";
import withErrorMessage from "@/ui/with-error-message";
import withLabel from "@/ui/with-label";
import withTooltip from "@/ui/with-tooltip";

const FieldWithError = withTooltip(withErrorMessage(withLabel(TextField)));

export default function Homepage() {
  const [name, setName] = useState("");

  return (
    <div className="mt-16 container mx-auto">
      <FieldWithError
        isOpen
        tip="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut minima, autem sed eveniet tempora quo ex eum, esse perspiciatis error maiores? Maiores expedita, unde sint eaque quibusdam enim molestiae ad."
        error={""}
        label="Your name"
        value={name}
        onChange={setName}
      />
    </div>
  );
}
