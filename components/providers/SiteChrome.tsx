"use client";

import * as React from "react";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { ReadyToTransformModal } from "@/components/forms/ReadyToTransformModal";
import { TestDriveModal } from "@/components/forms/TestDriveModal";

interface ChromeApi {
  openConsultation: () => void;
  openTransform: () => void;
  openTestDrive: (model?: string) => void;
}

const ChromeContext = React.createContext<ChromeApi | null>(null);

export function useSiteChrome() {
  const ctx = React.useContext(ChromeContext);
  if (!ctx) throw new Error("useSiteChrome must be used within <SiteChrome>");
  return ctx;
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [consultation, setConsultation] = React.useState(false);
  const [transform, setTransform] = React.useState(false);
  const [testDrive, setTestDrive] = React.useState<{ open: boolean; model?: string }>({
    open: false,
  });

  const api = React.useMemo<ChromeApi>(
    () => ({
      openConsultation: () => setConsultation(true),
      openTransform: () => setTransform(true),
      openTestDrive: (model?: string) => setTestDrive({ open: true, model }),
    }),
    []
  );

  return (
    <ChromeContext.Provider value={api}>
      {children}
      <ConsultationModal open={consultation} onClose={() => setConsultation(false)} />
      <ReadyToTransformModal open={transform} onClose={() => setTransform(false)} />
      <TestDriveModal
        open={testDrive.open}
        model={testDrive.model}
        onClose={() => setTestDrive((s) => ({ ...s, open: false }))}
      />
    </ChromeContext.Provider>
  );
}
