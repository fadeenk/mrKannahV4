import React, { type JSX } from "react";
import { CaseFigure, CaseVideo } from "@site/src/components/CaseStudy";
import type { ScreenRecording } from "@site/src/data/showcase";

type ShowcaseRecordingProps = {
  recording: ScreenRecording;
};

/**
 * A showcase project's recording, set up the same way on every project row and
 * write-up: the screenshot frame, one short caption under it, and the details
 * (what happens, and when) read to assistive tech as the video's description,
 * never shown. The smaller builds keep their own plain frames.
 */
export default function ShowcaseRecording({
  recording,
}: ShowcaseRecordingProps): JSX.Element {
  return (
    <CaseFigure framed caption={recording.caption}>
      <CaseVideo
        src={recording.src}
        poster={recording.poster}
        width={recording.width}
        height={recording.height}
        label={recording.label}
        description={recording.description}
      />
    </CaseFigure>
  );
}
