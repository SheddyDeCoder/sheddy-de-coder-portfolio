import { SKILLS_SNAPSHOT } from "./about-preview.constants";

export function SkillsSnapshot() {
  return (
    <div className="flex flex-wrap gap-2">
      {SKILLS_SNAPSHOT.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-primary/30 px-3 py-1.5 font-body text-xs text-primary"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}