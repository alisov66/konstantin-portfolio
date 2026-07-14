"use client";

import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

import TabGroup, { type TabGroupTab } from "@/components/ui/TabGroup";
import { tokens } from "@/styles/tokens";

const images = {
  msaOverview:
    "https://www.figma.com/api/mcp/asset/ca5d4c0f-2458-4b0b-88d0-d76bff049887",
  msaLayers:
    "https://www.figma.com/api/mcp/asset/5d344453-280f-4018-912f-cd5c447d79cb",
  msaPinned:
    "https://www.figma.com/api/mcp/asset/d03633fd-1938-4710-9dc3-9cc6a67bd69a",
  msaUnpinned:
    "https://www.figma.com/api/mcp/asset/d504eb7f-354c-4180-8b73-9fcb599cfd2d",
  dataMapping:
    "https://www.figma.com/api/mcp/asset/1fb6cf85-3236-44e9-bde9-260ae8b0295a",
  variables:
    "https://www.figma.com/api/mcp/asset/f4475d98-c23b-46ab-bad4-23449b01c777",
  compatibility:
    "https://www.figma.com/api/mcp/asset/2d28b46b-ce0b-4235-b8df-e03f58015ab3",
  mappingDetail:
    "https://www.figma.com/api/mcp/asset/b6647543-c269-4f7c-995f-6e8cdaa8d506",
  actionCopy:
    "https://www.figma.com/api/mcp/asset/9b0712f7-dce8-49bd-adab-0d3bdd81b3c4",
  headerArchitecture:
    "https://www.figma.com/api/mcp/asset/a886b57f-b495-4976-956d-5d0238f0adca",
  dialogHeader:
    "https://www.figma.com/api/mcp/asset/0843c0b8-78dc-4f63-96bc-619ba5557bd8",
  sheetHeader:
    "https://www.figma.com/api/mcp/asset/ede45fd5-3e49-4e48-9685-12214df4019e",
  workspaceHeader:
    "https://www.figma.com/api/mcp/asset/aea555b0-bba5-4de4-ba20-7e9800ac74e5",
  hierarchy:
    "https://www.figma.com/api/mcp/asset/c69ed7a2-b144-44a9-9f82-b800ba872db7",
  msaHeader:
    "https://www.figma.com/api/mcp/asset/260d98f1-8acf-49a9-ab10-40b1797b6ec6",
};

const tabs: TabGroupTab[] = [
  { id: "complex-workflow-design", label: "Complex workflow design" },
  { id: "design-systems", label: "Design systems" },
  { id: "documentation-collaboration", label: "Documentation & collaboration" },
  { id: "product-design-at-scale", label: "Product design at scale" },
  { id: "mobile-experiences", label: "Mobile experiences" },
];

type StyleVars = CSSProperties & Record<`--${string}`, string | number>;

function typeStyle(token: {
  fontSize: string | number;
  lineHeight: string | number;
  fontWeight: string | number;
}) {
  return {
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    fontWeight: token.fontWeight,
  };
}

function Gap({ size }: { size: string }) {
  return <div aria-hidden style={{ height: size }} />;
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p
      className="max-w-full"
      style={{
        ...typeStyle(tokens.typography.article.paragraph),
        marginBottom: tokens.spacing.base[3],
      }}
    >
      {children}
    </p>
  );
}

function CopyBlock({ children }: { children: ReactNode }) {
  return <div className="[&_p:last-child]:mb-0">{children}</div>;
}

function List({ children }: { children: ReactNode }) {
  return (
    <ul
      className="list-disc"
      style={{
        ...typeStyle(tokens.typography.article.paragraph),
        marginBottom: tokens.spacing.base[3],
        paddingLeft: "30px",
      }}
    >
      {children}
    </ul>
  );
}

function ArticleImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      className={[
        "block w-full border border-[var(--border-primary)] object-cover",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      src={src}
    />
  );
}

function H1({ children }: { children: ReactNode }) {
  return (
    <h3 style={typeStyle(tokens.typography.article.h1)}>
      {children}
    </h3>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h4 style={typeStyle(tokens.typography.article.h2)}>
      {children}
    </h4>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h5 style={typeStyle(tokens.typography.article.h3)}>
      {children}
    </h5>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <H2>{title}</H2>
      <Gap size={tokens.spacing.article.h2Gap} />
      {children}
    </section>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <H3>{title}</H3>
      <Gap size={tokens.spacing.article.h3Gap} />
      {children}
    </section>
  );
}

function ArticleShell({ children }: { children: ReactNode }) {
  return (
    <article
      className="w-full"
      style={{ maxWidth: tokens.spacing.article.maxWidth }}
    >
      {children}
    </article>
  );
}

function ComplexWorkflowArticle() {
  return (
    <div className="flex flex-col">
      <ArticleShell>
        <H1>MSA workspace</H1>
        <Gap size={tokens.spacing.article.h1Gap} />

        <Section title="Context">
          <CopyBlock>
            <Paragraph>
              MSA Workspace is an analytical environment for exploring sequence
              alignments through multiple synchronized visualizations.
            </Paragraph>
            <Paragraph>
              Researchers use it to inspect sequence patterns, metadata
              relationships, diversity metrics, and evolutionary relationships
              while frequently switching focus throughout the analysis process.
            </Paragraph>
          </CopyBlock>
        </Section>

        <Gap size={tokens.spacing.article.mediaGap} />
        <ArticleImage alt="MSA workspace overview" src={images.msaOverview} />
        <Gap size={tokens.spacing.article.mediaGap} />
        <Gap size={tokens.spacing.article.sectionGap} />

        <Section title="Insights">
          <CopyBlock>
            <Paragraph>
              The design was informed through customer discussions, product
              exploration sessions, and observation of real analysis workflows.
            </Paragraph>
            <Paragraph>Key themes included:</Paragraph>
            <List>
              <li>Different researchers focus on different aspects of the same dataset.</li>
              <li>Analytical priorities change throughout the investigation.</li>
              <li>Large alignments require both overview and detailed inspection modes.</li>
              <li>Important metadata must remain visible during navigation.</li>
            </List>
          </CopyBlock>
        </Section>

        <Gap size={tokens.spacing.article.sectionGap} />

        <Section title="Challenge">
          <CopyBlock>
            <Paragraph>
              Researchers use sequence alignments for different analytical goals,
              often within the same session. Some focus on sequence conservation
              and mutations. Others investigate metadata, diversity metrics, or
              evolutionary relationships.
            </Paragraph>
            <Paragraph>
              A single static layout could not efficiently support all workflows.
            </Paragraph>
            <Paragraph>
              The challenge was to design a workspace that could adapt to
              different research tasks while preserving context and avoiding
              unnecessary visual complexity.
            </Paragraph>
          </CopyBlock>
        </Section>

        <Gap size={tokens.spacing.article.sectionGap} />

        <Section title="Design principles">
          <CopyBlock>
            <Paragraph>
              Rather than creating separate tools for different analysis tasks, I
              focused on building a flexible workspace that adapts to the user’s
              objective.
            </Paragraph>
            <Paragraph>The design was guided by four principles:</Paragraph>
          </CopyBlock>
          <Gap size={tokens.spacing.article.subsectionGap} />
          <Subsection title="Adaptability">
            <Paragraph>
              The workspace should support different analytical goals without
              requiring separate interfaces.
            </Paragraph>
          </Subsection>
          <Gap size={tokens.spacing.article.subsectionGap} />
          <Subsection title="Progressive detail">
            <Paragraph>
              Users should be able to switch between overview and detailed
              inspection modes.
            </Paragraph>
          </Subsection>
          <Gap size={tokens.spacing.article.subsectionGap} />
          <Subsection title="Context preservation">
            <Paragraph>
              Important metadata should remain accessible while navigating large
              datasets.
            </Paragraph>
          </Subsection>
          <Gap size={tokens.spacing.article.subsectionGap} />
          <Subsection title="User control">
            <Paragraph>
              Researchers should be able to customize the workspace according to
              their investigation needs.
            </Paragraph>
          </Subsection>
        </Section>

        <Gap size={tokens.spacing.article.sectionGap} />

        <Section title="Key improvements">
          <Subsection title="One workspace, multiple analytical tasks">
            <CopyBlock>
              <Paragraph>
                Designed the workspace as a collection of independent analytical
                layers rather than a fixed visualization.
              </Paragraph>
              <Paragraph>Researchers can enable or disable:</Paragraph>
              <List>
                <li>Trees</li>
                <li>Metadata columns</li>
                <li>Heatmaps</li>
                <li>Consensus views</li>
                <li>Sequence logos</li>
              </List>
              <Paragraph>
                Depending on the analysis objective. This allows the same
                workspace to support different research workflows without
                requiring separate tools or layouts.
              </Paragraph>
            </CopyBlock>
          </Subsection>

          <Gap size={tokens.spacing.article.mediaGap} />
          <ArticleImage alt="MSA analytical layers" src={images.msaLayers} />
          <Gap size={tokens.spacing.article.mediaGap} />
          <Gap size={tokens.spacing.article.subsectionGap} />

          <Subsection title="Progressive detail through density controls">
            <CopyBlock>
              <Paragraph>
                Sequence alignments often contain hundreds of rows and thousands
                of positions.
              </Paragraph>
              <Paragraph>
                Showing maximum detail at all times creates unnecessary visual
                noise and makes navigation more difficult.
              </Paragraph>
              <Paragraph>
                Introduced collapsible states for both the heatmap and alignment grid.
              </Paragraph>
            </CopyBlock>
          </Subsection>

          <Gap size={tokens.spacing.article.mediaGap} />
          <div className="grid gap-5 md:grid-cols-2">
            <figure>
              <ArticleImage alt="Pinned MSA view" src={images.msaPinned} />
              <Gap size={tokens.spacing.article.mediaToCaptionGap} />
              <figcaption style={typeStyle(tokens.typography.article.paragraph)}>
                Pinned
              </figcaption>
            </figure>
            <figure>
              <ArticleImage alt="Unpinned MSA view" src={images.msaUnpinned} />
              <Gap size={tokens.spacing.article.mediaToCaptionGap} />
              <figcaption style={typeStyle(tokens.typography.article.paragraph)}>
                Unpinned
              </figcaption>
            </figure>
          </div>
        </Section>

        <Gap size={tokens.spacing.article.subsectionGap} />

        <Section title="My role">
          <Paragraph>
            Led the design of the MSA Workspace end-to-end, including workflow
            architecture, interaction design, information density strategies,
            component design, and developer documentation. Worked closely with
            engineering throughout implementation and validation.
          </Paragraph>
        </Section>

        <Gap size={tokens.spacing.article.sectionGap} />

        <Section title="Outcome">
          <Paragraph>
            Created a flexible analytical environment that supports multiple
            sequence analysis workflows while balancing information density,
            context preservation, and usability.
          </Paragraph>
        </Section>
      </ArticleShell>

      <Gap size={tokens.spacing.article.chapterGap} />

      <ArticleShell>
        <H1>Data mapping</H1>
        <Gap size={tokens.spacing.article.h1Gap} />
        <Section title="Context">
          <Paragraph>
            Data Mapping controls what information appears on visualizations and
            how it is represented. Users connect metadata to chart variables
            before analysis can begin.
          </Paragraph>
        </Section>
        <Gap size={tokens.spacing.article.mediaGap} />
        <ArticleImage
          alt="Data mapping interface"
          className="max-w-[450px]"
          src={images.dataMapping}
        />
        <Gap size={tokens.spacing.article.mediaGap} />
        <Gap size={tokens.spacing.article.sectionGap} />
        <Section title="Insights">
          <CopyBlock>
            <Paragraph>
              The redesign was informed by recurring feedback collected through
              customer webinars, one-on-one discussions, and support requests.
            </Paragraph>
            <Paragraph>Key themes included:</Paragraph>
            <List>
              <li>Difficulty discovering relevant metadata.</li>
              <li>Uncertainty about variable compatibility.</li>
              <li>High effort required to configure visualizations.</li>
            </List>
          </CopyBlock>
        </Section>
        <Gap size={tokens.spacing.article.sectionGap} />
        <Section title="Key improvements">
          <Subsection title="Faster discovery">
            <Paragraph>
              Organized variables by biological meaning rather than presenting a
              flat list.
            </Paragraph>
          </Subsection>
          <Gap size={tokens.spacing.article.mediaGap} />
          <ArticleImage
            alt="Variables grouped by biological meaning"
            className="max-w-[450px]"
            src={images.variables}
          />
          <Gap size={tokens.spacing.article.mediaGap} />
          <Subsection title="Intelligent compatibility guidance">
            <Paragraph>
              Introduced bidirectional guidance between metadata variables and
              visualization targets.
            </Paragraph>
          </Subsection>
          <Gap size={tokens.spacing.article.mediaGap} />
          <div className="grid gap-5 md:grid-cols-2">
            <ArticleImage
              alt="Compatible visualization targets"
              src={images.compatibility}
            />
            <ArticleImage
              alt="Metadata compatibility detail"
              src={images.mappingDetail}
            />
          </div>
          <Gap size={tokens.spacing.article.mediaGap} />
          <Subsection title="More explicit actions">
            <Paragraph>
              Changed ambiguous drag-and-drop instructions into clearer guidance.
            </Paragraph>
          </Subsection>
          <Gap size={tokens.spacing.article.mediaGap} />
          <ArticleImage alt="Explicit action copy" src={images.actionCopy} />
        </Section>
      </ArticleShell>
    </div>
  );
}

function DesignSystemsArticle() {
  return (
    <ArticleShell>
      <H1>Scalable header architecture</H1>
      <Gap size={tokens.spacing.article.h1Gap} />

      <Section title="Context">
        <CopyBlock>
          <Paragraph>
            Platforma contains a growing collection of analytical tools,
            dialogs, side sheets, and full-screen workspaces.
          </Paragraph>
          <Paragraph>
            As new features were introduced, headers evolved independently.
            Similar interfaces used different hierarchy levels, layouts, and
            action placements.
          </Paragraph>
          <Paragraph>
            The development of the MSA Workspace introduced new requirements,
            including workspace controls, graph-building actions, and workspace
            collapse behavior that existing header patterns could not support
            consistently.
          </Paragraph>
        </CopyBlock>
      </Section>

      <Gap size={tokens.spacing.article.mediaGap} />
      <ArticleImage
        alt="Scalable header architecture"
        src={images.headerArchitecture}
      />
      <Gap size={tokens.spacing.article.mediaGap} />
      <Gap size={tokens.spacing.article.sectionGap} />

      <Section title="Insights">
        <CopyBlock>
          <Paragraph>Product exploration revealed two recurring problems:</Paragraph>
          <List>
            <li>Similar interfaces used different header structures and interaction patterns.</li>
            <li>New analytical workflows required increasingly sophisticated header behavior.</li>
          </List>
          <Paragraph>
            Without a shared system, every new feature risked introducing
            another custom variation.
          </Paragraph>
        </CopyBlock>
      </Section>

      <Gap size={tokens.spacing.article.sectionGap} />

      <Section title="Challenge">
        <CopyBlock>
          <Paragraph>
            Design a scalable header architecture that supports different
            interface contexts while remaining flexible enough for future
            analytical workflows.
          </Paragraph>
          <Paragraph>
            The solution needed to work across dialogs, side sheets, and complex
            workspaces without forcing all experiences into a single component.
          </Paragraph>
        </CopyBlock>
      </Section>

      <Gap size={tokens.spacing.article.sectionGap} />

      <Section title="Key improvements">
        <Subsection title="Header architecture instead of a single component">
          <Paragraph>
            Rather than creating a universal header component, I introduced a
            family of specialized patterns designed for different interface
            contexts.
          </Paragraph>
        </Subsection>
        <Gap size={tokens.spacing.article.mediaGap} />
        <Paragraph>Dialog header</Paragraph>
        <ArticleImage alt="Dialog header pattern" src={images.dialogHeader} />
        <Gap size={tokens.spacing.article.mediaGap} />
        <Paragraph>Sheet header</Paragraph>
        <ArticleImage alt="Sheet header pattern" src={images.sheetHeader} />
        <Gap size={tokens.spacing.article.mediaGap} />
        <Paragraph>Workspace header</Paragraph>
        <ArticleImage alt="Workspace header pattern" src={images.workspaceHeader} />

        <Gap size={tokens.spacing.article.mediaGap} />
        <Gap size={tokens.spacing.article.subsectionGap} />

        <Subsection title="Consistent hierarchy across the platform">
          <CopyBlock>
            <Paragraph>
              Defined a hierarchy model that communicates the scope of each
              interface context.
            </Paragraph>
            <Paragraph>
              Workspace Header uses H2 for analytical environments. Dialog
              Header also uses H2 for primary task contexts. Sheet Header uses
              H3 to signal a subordinate context within a workspace.
            </Paragraph>
          </CopyBlock>
        </Subsection>
        <Gap size={tokens.spacing.article.mediaGap} />
        <ArticleImage alt="Header hierarchy model" src={images.hierarchy} />

        <Gap size={tokens.spacing.article.mediaGap} />
        <Gap size={tokens.spacing.article.subsectionGap} />

        <Subsection title="Support for complex analytical workflows">
          <CopyBlock>
            <Paragraph>
              The MSA Workspace required functionality beyond traditional page
              headers.
            </Paragraph>
            <Paragraph>Examples include:</Paragraph>
            <List>
              <li>Workspace collapse controls</li>
              <li>Graph creation actions</li>
              <li>Analysis-specific controls</li>
              <li>Dynamic action groups</li>
            </List>
          </CopyBlock>
        </Subsection>
        <Gap size={tokens.spacing.article.mediaGap} />
        <ArticleImage alt="MSA header" src={images.msaHeader} />
      </Section>

      <Gap size={tokens.spacing.article.sectionGap} />

      <Section title="Outcome">
        <CopyBlock>
          <Paragraph>
            Established a scalable header architecture that unified dialogs,
            side sheets, and analytical workspaces under a shared set of design
            principles.
          </Paragraph>
          <Paragraph>
            The system improved consistency, reduced design debt, simplified
            implementation, and created a foundation capable of supporting future
            analytical workflows.
          </Paragraph>
        </CopyBlock>
      </Section>
    </ArticleShell>
  );
}

function EmptyArticle({ label }: { label: string }) {
  return (
    <ArticleShell>
      <div className="flex min-h-[520px] items-center justify-center text-center">
        <div>
          <H1>{label}</H1>
          <Gap size={tokens.spacing.article.h2Gap} />
          <p
            style={{
              ...typeStyle(tokens.typography.article.paragraph),
              color: tokens.colors.text.secondary,
            }}
          >
            Article content is coming soon.
          </p>
        </div>
      </div>
    </ArticleShell>
  );
}

function ActiveArticle({ value }: { value: string }) {
  if (value === "complex-workflow-design") {
    return <ComplexWorkflowArticle />;
  }

  if (value === "design-systems") {
    return <DesignSystemsArticle />;
  }

  const label = tabs.find((tab) => tab.id === value)?.label || "Article";
  return <EmptyArticle label={label} />;
}

export default function CapabilitiesSection() {
  const [value, setValue] = useState(tabs[0].id);

  const sectionStyle: StyleVars = {
    "--capabilities-column-gap": "100px",
    "--capabilities-menu-width": "277px",
  };

  return (
    <section
      id="work"
      className="flex w-full flex-col items-start gap-[var(--base-10)] bg-[var(--bg-beige)] px-[var(--padding-side)] pt-[var(--base-10)] lg:flex-row lg:gap-[var(--capabilities-column-gap)]"
      style={sectionStyle}
    >
      <div className="flex w-full shrink-0 flex-col items-start gap-[var(--base-20)] bg-[var(--bg-beige)] pt-[var(--base-10)] lg:sticky lg:top-0 lg:w-[var(--capabilities-menu-width)]">
        <h2
          className="text-center text-[var(--text-accent)]"
          style={typeStyle(tokens.typography.heading.h2)}
        >
          Capabilities
        </h2>
        <TabGroup
          className="flex-wrap items-start"
          onValueChange={setValue}
          tabs={tabs}
          value={value}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start pt-[var(--base-10)]">
        <ActiveArticle value={value} />
      </div>
    </section>
  );
}
