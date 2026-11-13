import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Sun, Moon, Maximize2 } from 'lucide-react';
import { projects } from '../content';
import { SectionNav } from '../components/SectionNav';
import { VideoPlayer } from '../components/VideoPlayer';
import { Lightbox } from '../components/Lightbox';
import { useDarkMode } from '../hooks/useDarkMode';
import type { ProjectData } from '../content/types';

function getProjectSections(project: ProjectData) {
  if (project.slug === 'medisync') {
    return [
      { id: 'overview', label: 'Overview' },
      { id: 'role', label: 'My Role' },
      { id: 'problem', label: 'Problem & Context' },
      { id: 'principles', label: 'Design Principles' },
      { id: 'architecture', label: 'System Architecture' },
      { id: 'app-walkthrough', label: 'App Walkthrough' },
      { id: 'technical', label: 'Technical Decisions' },
      { id: 'process', label: 'Hardware & Data' },
      { id: 'outcome', label: 'Outcome & Limits' },
    ];
  }

  if (project.slug === 'motorage') {
    return [
      { id: 'overview', label: 'Overview' },
      { id: 'role', label: 'My Role' },
      { id: 'context', label: 'Context' },
      { id: 'problem', label: 'The Problem' },
      { id: 'principles', label: 'Design Principles' },
      { id: 'process', label: 'Design Process' },
      { id: 'screens', label: 'Dashboard Screens' },
      { id: 'design-system', label: 'Visual Design' },
      { id: 'implementation', label: 'Implementation & Validation' },
      { id: 'video', label: 'Demo Video' },
      { id: 'outcome', label: 'Outcome' },
    ];
  }

  if (project.slug === 'agrirover') {
    return [
      { id: 'overview', label: 'Overview' },
      { id: 'role', label: 'My Role' },
      { id: 'context', label: 'Context' },
      { id: 'problem', label: 'The Problem' },
      { id: 'principles', label: 'Design Principles' },
      { id: 'architecture', label: 'Information Architecture' },
      { id: 'process', label: 'Design Process' },
      { id: 'screens', label: 'Key Screens' },
      { id: 'design-system', label: 'Design System' },
      { id: 'safety', label: 'Safety and Feedback' },
      { id: 'video', label: 'Prototype & Demo' },
      { id: 'outcome', label: 'Outcome' },
    ];
  }

  if (project.slug === 'motorex') {
    return [
      { id: 'overview', label: 'Overview' },
      { id: 'role', label: 'My Role' },
      { id: 'context', label: 'Context' },
      { id: 'problem', label: 'Problem' },
      { id: 'process', label: 'Design Approach' },
      { id: 'screens', label: 'Key Screens' },
      { id: 'design-system', label: 'Design System' },
      { id: 'video', label: 'Demo Video' },
      { id: 'outcome', label: 'Outcome' },
    ];
  }

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'role', label: 'My Role' },
    { id: 'problem', label: 'Problem' },
    { id: 'process', label: 'Process' },
    { id: 'screens', label: 'Key Screens' },
  ];

  if (project.videoSrc) {
    sections.push({ id: 'video', label: 'Demo Video' });
  }

  sections.push({ id: 'outcome', label: 'Outcome' });
  return sections;
}

export function Project() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDark, toggle } = useDarkMode();
  const [activeLightbox, setActiveLightbox] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
        <p className="text-neutral-500">Project not found.</p>
      </div>
    );
  }

  const sections = getProjectSections(project);
  const acc = project.accent;
  const isMediSync = project.slug === 'medisync';
  const isMotorex = project.slug === 'motorex';
  const isAgriRover = project.slug === 'agrirover';
  const isMotorage = project.slug === 'motorage';

  const handleClose = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Lightbox for enlarged image previews */}
      <Lightbox image={activeLightbox} onClose={() => setActiveLightbox(null)} />

      {/* Persistent Floating Top-Right Controls: Theme Toggle & Circular Close (X) */}
      <div className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50 flex items-center gap-2.5 sm:gap-3 pointer-events-auto">
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full glass-pill text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white shadow-md shadow-black/5 dark:shadow-black/20 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>

        <motion.button
          onClick={handleClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full glass-pill text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white shadow-md shadow-black/5 dark:shadow-black/20 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 cursor-pointer"
          aria-label="Close project and return"
        >
          <X size={19} />
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 sm:pt-24 pb-32">
        <div className="lg:grid lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_260px] lg:gap-12 xl:gap-16 items-start">
          {/* Main Content Column (~75%) */}
          <main className="w-full min-w-0">
            {/* ── OPENING SECTION (Compact Editorial Layout) ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-10 pt-4"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[46px] font-black tracking-tight text-neutral-900 dark:text-white mb-3.5 leading-[1.18] sm:leading-[1.16] overflow-visible pb-1.5">
                {project.title}
              </h1>

              <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed overflow-visible">
                {project.subtitle}
              </p>

              {/* Compact Metadata Grid: Year, Team, My Role, Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-neutral-100 dark:border-neutral-800/80">
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-1">
                    Year
                  </p>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 break-words">
                    {project.year}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-1">
                    Team
                  </p>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 break-words">
                    {project.team}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-1">
                    My Role
                  </p>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 break-words">
                    {project.myRole}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-1">
                    Status
                  </p>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 break-words">
                    {project.status}
                  </p>
                </div>
              </div>

              {/* Statistics Grid */}
              {isMediSync || isMotorex || isAgriRover || isMotorage ? (
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl sm:rounded-2xl border border-neutral-200/70 dark:border-neutral-800/80 p-3.5 sm:p-5 bg-neutral-50/50 dark:bg-neutral-900/30 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                    >
                      <p className="text-2xl sm:text-[28px] font-black tracking-tight mb-1" style={{ color: acc }}>
                        {s.value}
                      </p>
                      <div className="mt-1">
                        <h4 className="text-xs sm:text-[15px] font-bold text-neutral-900 dark:text-white leading-tight sm:leading-snug">
                          {s.label}
                        </h4>
                        {s.description && (
                          <p className="text-[11px] sm:text-[13px] text-neutral-400 dark:text-neutral-500 mt-0.5 leading-snug sm:leading-relaxed">
                            {s.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-neutral-100 dark:border-neutral-800/80 p-4 bg-neutral-50/50 dark:bg-neutral-900/30"
                    >
                      <p className="text-2xl font-black tracking-tight" style={{ color: acc }}>
                        {s.value}
                      </p>
                      <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 leading-tight">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* ── HERO BANNER (MediSync App Showcase) ── */}
            {isMediSync && (
              <div className="mb-12 sm:mb-14">
                <div
                  onClick={() =>
                    setActiveLightbox({
                      src: project.coverMedia.src,
                      alt: 'MediSync Mobile App Suite',
                      caption: 'MediSync React Native mobile app — real-time dosing control, scheduling, and vitals monitoring',
                    })
                  }
                  className="group relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-sm cursor-zoom-in"
                >
                  <img
                    src={project.coverMedia.src}
                    alt="MediSync Mobile App Suite"
                    className="w-full h-auto max-h-[560px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute top-4 right-4 p-2 rounded-full glass-pill text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={16} />
                  </div>
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-2.5 font-medium">
                  MediSync React Native mobile application — dosing schedule, live telemetry & vitals monitoring
                </p>
              </div>
            )}

            {/* Cover media for video projects (AgriRover, Motorex, Motorage) */}
            {!isMediSync && project.coverMedia.type === 'video' && (
              <div className="mb-16 rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-video shadow-sm">
                <video
                  src={project.coverMedia.src}
                  poster={project.coverMedia.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label={`${project.title} demo video`}
                />
              </div>
            )}

            {/* ── OVERVIEW ── */}
            <section id="overview" className="mb-16 scroll-mt-28">
              <SectionLabel>Overview</SectionLabel>
              <p className="text-[17px] text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
                {project.overview}
              </p>
            </section>

            {/* ── MY ROLE ── */}
            <section id="role" className="mb-16 scroll-mt-28">
              <SectionLabel>My Role</SectionLabel>
              <p className="text-[17px] text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mb-4">
                {project.myRole}
              </p>
              {project.myRoleContributions && (
                <ul className="space-y-2.5 mt-4 max-w-2xl">
                  {project.myRoleContributions.map((c, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: acc }} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* ── CONTEXT (Motorex & AgriRover) ── */}
            {(isMotorex || isAgriRover || isMotorage) && project.contextData && (
              <section id="context" className="mb-16 scroll-mt-28">
                <SectionLabel>Context</SectionLabel>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-[1.25]">
                  {project.contextData.heading}
                </h3>
                <p className="text-[17px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  {project.contextData.body}
                </p>
                <div className={`grid gap-4 ${isAgriRover || isMotorage ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'}`}>
                  {project.contextData.subsystems.map((sub, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5 border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full" style={{ background: acc }} />
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                          {sub.title}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* ── PROBLEM ── */}
            <section id="problem" className="mb-16 scroll-mt-28 overflow-visible">
              <SectionLabel>{isMediSync ? 'Problem & Context' : 'The Problem'}</SectionLabel>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-[1.25] overflow-visible pb-0.5">
                {project.problem.headline}
              </h3>
              <p className="text-[17px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-2xl overflow-visible">
                {project.problem.body}
              </p>

              <div className={`grid gap-4 ${isMotorex || isAgriRover || isMotorage ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
                {project.problem.challenges.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold tabular-nums opacity-60" style={{ color: acc }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                          {c.title}
                        </h4>
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {c.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── DESIGN PRINCIPLES (MediSync & AgriRover Dedicated Section) ── */}
            {(isMediSync || isAgriRover || isMotorage) && (
              <section id="principles" className="mb-16 scroll-mt-28">
                <SectionLabel>Design Principles</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.principles.map((p, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5 border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/60 dark:bg-neutral-900/40"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="text-xs font-bold tabular-nums mt-0.5 px-2 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 shrink-0"
                          style={{ color: acc }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h4 className="text-[15px] font-semibold text-neutral-900 dark:text-white mb-1">
                            {p.title}
                          </h4>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            {p.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* Non-MediSync/AgriRover inline principles */}
            {!isMediSync && !isAgriRover && !isMotorage && project.principles.length > 0 && (
              <div className="mb-16">
                <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-5">
                  Design principles
                </p>
                <div className="space-y-4">
                  {project.principles.map((p, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <span className="text-xs font-bold tabular-nums mt-0.5 opacity-60 w-5 shrink-0" style={{ color: acc }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">
                          {p.title}
                        </h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── SYSTEM ARCHITECTURE (MediSync) ── */}
            {isMediSync && project.architecture && (
              <section id="architecture" className="mb-16 scroll-mt-28">
                <SectionLabel>System Architecture</SectionLabel>
                <p className="text-[16px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-6">
                  {project.architecture.summary}
                </p>

                {/* Architecture Diagram Image */}
                {project.architecture.diagramSrc && (
                  <div className="mb-8">
                    <div
                      onClick={() =>
                        setActiveLightbox({
                          src: project.architecture!.diagramSrc!,
                          alt: 'MediSync system architecture diagram',
                          caption: 'System architecture: Two ESP32 microcontrollers, Firebase RTDB, and React Native mobile app',
                        })
                      }
                      className="group relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm cursor-zoom-in"
                    >
                      <img
                        src={project.architecture.diagramSrc}
                        alt="MediSync system architecture diagram"
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <div className="absolute top-3 right-3 p-1.5 rounded-full glass-pill text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={15} />
                      </div>
                    </div>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-2">
                      System Architecture Diagram — Click to enlarge
                    </p>
                  </div>
                )}

                {/* Architecture Nodes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {project.architecture.nodes.map((node, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5 border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                          {node.title}
                        </h4>
                        <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500">
                          {node.role}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {node.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {node.details}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── INFORMATION ARCHITECTURE (AgriRover) ── */}
            {isAgriRover && project.infoArchitecture && (
              <section id="architecture" className="mb-16 scroll-mt-28">
                <SectionLabel>Information Architecture</SectionLabel>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-[1.25]">
                  {project.infoArchitecture.heading}
                </h3>
                <p className="text-[17px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  {project.infoArchitecture.body}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.infoArchitecture.elements.map((el, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5 border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 tabular-nums" style={{ color: acc }}>
                          {el.number}
                        </span>
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                          {el.title}
                        </h4>
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {el.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* ── APP WALKTHROUGH BY FUNCTIONAL GROUPS (MediSync) ── */}
            {isMediSync && project.screenshotGroups && (
              <section id="app-walkthrough" className="mb-16 scroll-mt-28">
                <SectionLabel>App Walkthrough &amp; Core Flows</SectionLabel>
                <div className="space-y-14">
                  {project.screenshotGroups.map((group) => (
                    <div key={group.id} className="rounded-2xl border border-neutral-100 dark:border-neutral-800/80 p-6 bg-neutral-50/30 dark:bg-neutral-900/20">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                        {group.title}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-2xl">
                        {group.description}
                      </p>

                      <div
                        className={`grid gap-6 ${
                          group.screens.length === 1
                            ? 'grid-cols-1 max-w-md mx-auto'
                            : 'grid-cols-1 sm:grid-cols-2'
                        }`}
                      >
                        {group.screens.map((screen, idx) => (
                          <div key={idx} className="flex flex-col">
                            <div
                              onClick={() =>
                                setActiveLightbox({
                                  src: screen.src,
                                  alt: screen.alt,
                                  caption: `${screen.title} — ${screen.description}`,
                                })
                              }
                              className="group relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm cursor-zoom-in"
                            >
                              <img
                                src={screen.src}
                                alt={screen.alt}
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                                loading="lazy"
                              />
                              <div className="absolute top-3 right-3 p-1.5 rounded-full glass-pill text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize2 size={14} />
                              </div>
                            </div>
                            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mt-3 mb-1">
                              {screen.title}
                            </h4>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                              {screen.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* ── TECHNICAL DECISIONS (MediSync) ── */}
            {isMediSync && project.technicalDecisions && (
              <section id="technical" className="mb-16 scroll-mt-28">
                <SectionLabel>Technical Decisions &amp; Problems Solved</SectionLabel>
                <div className="space-y-4">
                  {project.technicalDecisions.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5 border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50"
                    >
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-2" style={{ color: acc }}>
                        {item.topic}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
                        <div>
                          <p className="font-semibold text-neutral-400 uppercase tracking-wider text-[10px] mb-0.5">
                            Problem
                          </p>
                          <p className="text-neutral-600 dark:text-neutral-400">
                            {item.problem}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-400 uppercase tracking-wider text-[10px] mb-0.5">
                            Engineering Decision
                          </p>
                          <p className="text-neutral-800 dark:text-neutral-200 font-medium">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* ── PROCESS & HARDWARE (Common for all / detailed for MediSync & Motorex) ── */}
            <section id="process" className="mb-16 scroll-mt-28 overflow-visible">
              <SectionLabel>
                {isMediSync
                  ? 'Hardware & Data Model'
                  : isMotorex
                  ? 'Design Approach'
                  : isAgriRover || isMotorage
                  ? 'Design Process'
                  : 'Process'}
              </SectionLabel>
              {isMotorex || isAgriRover || isMotorage ? (
                <>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-[1.25]">
                    {isAgriRover
                      ? 'From operational requirements to intuitive mobile interactions.'
                      : isMotorage
                      ? 'From track demands to a reliable embedded cockpit.'
                      : 'From vehicle requirements to a usable cockpit.'}
                  </h3>
                  <p className="text-[17px] text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                    {isAgriRover
                      ? 'Structuring five operational subsystems into a cohesive, field-ready mobile application required a structured design approach across six phases:'
                      : isMotorage
                      ? 'To bridge vehicle electrical telemetry with high-speed off-road operation, the design process progressed through six disciplined phases:'
                      : 'To bridge low-level CAN bus messages with high-speed off-road operation, the design process progressed through six disciplined phases:'}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {project.processSections.map((sec, i) => (
                      <div
                        key={sec.id}
                        className="rounded-xl p-5 border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-black tabular-nums block mb-2" style={{ color: acc }}>
                            Step {String(i + 1).padStart(2, '0')}
                          </span>
                          <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-1.5">
                            {sec.heading.replace(/^\d+\.\s*/, '')}
                          </h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            {sec.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-14">
                  {project.processSections.map((sec) => (
                    <div key={sec.id} className="overflow-visible">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-[1.25] overflow-visible pb-0.5">
                        {sec.heading}
                      </h3>
                      <p className="text-[16px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-2xl overflow-visible">
                        {sec.body}
                      </p>
                      {sec.media && sec.media.type === 'image' && sec.media.src && (
                        <div
                          onClick={() =>
                            setActiveLightbox({
                              src: sec.media!.src!,
                              alt: sec.media!.alt ?? sec.heading,
                              caption: sec.heading,
                            })
                          }
                          className="group relative rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800 shadow-sm cursor-zoom-in"
                        >
                          <img
                            src={sec.media.src}
                            alt={sec.media.alt ?? sec.heading}
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                            loading="lazy"
                          />
                          <div className="absolute top-3 right-3 p-1.5 rounded-full glass-pill text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 size={15} />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ── KEY SCREENS (Motorex & AgriRover Screenshot Groups) ── */}
            {(isMotorex || isAgriRover || isMotorage) && project.screenshotGroups && (
              <section id="screens" className="mb-16 scroll-mt-28">
                <SectionLabel>{isMotorage ? 'Dashboard Screens' : 'Key Screens'}</SectionLabel>
                <div className="space-y-14">
                  {project.screenshotGroups.map((group) => (
                    <div
                      key={group.id}
                      className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/80 p-6 sm:p-7 bg-neutral-50/40 dark:bg-neutral-900/20"
                    >
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                        {group.title}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-2xl">
                        {group.description}
                      </p>

                      <div
                        className={`grid gap-6 ${
                          isAgriRover
                            ? group.screens.length === 1
                              ? 'grid-cols-1 max-w-[340px] mx-auto'
                              : 'grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto'
                            : group.screens.length === 1
                            ? 'grid-cols-1 max-w-2xl mx-auto'
                            : group.screens.length === 2
                            ? 'grid-cols-1 sm:grid-cols-2'
                            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        }`}
                      >
                        {group.screens.map((screen, idx) => (
                          <div key={idx} className="flex flex-col">
                            <div
                              onClick={() =>
                                setActiveLightbox({
                                  src: screen.src,
                                  alt: screen.alt,
                                  caption: `${screen.title} — ${screen.description}`,
                                })
                              }
                              className={`group relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm cursor-zoom-in ${
                                isAgriRover
                                  ? 'bg-neutral-900/60 p-2 sm:p-3 flex items-center justify-center'
                                  : 'bg-neutral-950'
                              }`}
                            >
                              <img
                                src={screen.src}
                                alt={screen.alt}
                                className={`w-full h-auto transition-transform duration-300 group-hover:scale-[1.02] ${
                                  isAgriRover ? 'rounded-xl max-h-[640px] object-contain' : 'object-contain'
                                }`}
                                loading="lazy"
                              />
                              <div className="absolute top-4 right-4 p-1.5 rounded-full glass-pill text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize2 size={14} />
                              </div>
                            </div>
                            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mt-3 mb-1">
                              {screen.title}
                            </h4>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                              {screen.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* ── DESIGN SYSTEM (Motorex & AgriRover) ── */}
            {(isMotorex || isAgriRover || isMotorage) && project.designSystem && (
              <section id="design-system" className="mb-16 scroll-mt-28">
                <SectionLabel>{isMotorage ? 'Visual Design' : 'Design System'}</SectionLabel>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                  {isMotorage
                    ? 'Visual Design System'
                    : isAgriRover
                    ? 'Mobile Cockpit Design System'
                    : 'Embedded Cockpit Design System'}
                </h3>
                <p className="text-[16px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  {isMotorage
                    ? 'Engineered for high sunlight legibility, zero glare, and instant status distinction on a 1024×600 embedded touchscreen.'
                    : isAgriRover
                    ? 'Engineered for high-glanceability outdoor agricultural operation. Semantic colour coding creates instant cognitive distinction across driving, manipulation, video, autonomy, and safety systems.'
                    : 'Engineered specifically for an off-road 1024×600 touchscreen to guarantee high sunlight legibility, zero ambiguity, and rapid glanceability under high vibration.'}
                </p>

                {/* Colour Palette */}
                <div className="mb-12">
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-neutral-400 dark:text-neutral-500">
                    Colour Palette
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {project.designSystem.palette.map((c) => (
                      <div
                        key={c.name}
                        className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 p-3 bg-neutral-50/60 dark:bg-neutral-900/40 flex flex-col justify-between"
                      >
                        <div>
                          <div
                            className="w-full h-12 rounded-lg mb-2.5 border border-black/10 shadow-inner"
                            style={{ backgroundColor: c.hex }}
                          />
                          <p className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">
                            {c.name}
                          </p>
                          <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 mt-0.5">
                            {c.hex}
                          </p>
                        </div>
                        <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-2 leading-tight">
                          {c.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div className="mb-12">
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-neutral-400 dark:text-neutral-500">
                    {isAgriRover || isMotorage ? 'Typography Hierarchy' : 'Typography Hierarchy (Montserrat)'}
                  </h4>
                  <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 divide-y divide-neutral-200/60 dark:divide-neutral-800">
                    {project.designSystem.typography.map((t, idx) => (
                      <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono">
                              {t.size}
                            </span>
                            <h5 className="text-sm font-semibold text-neutral-900 dark:text-white">
                              {t.level}
                            </h5>
                            <span className="text-xs text-neutral-400 dark:text-neutral-500">({t.weight})</span>
                          </div>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {t.usage}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Components */}
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-neutral-400 dark:text-neutral-500">
                    Interface Components
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.designSystem.components.map((comp, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl p-5 border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40"
                      >
                        <h5 className="text-sm font-bold text-neutral-900 dark:text-white mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: acc }} />
                          {comp.title}
                        </h5>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {comp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ── SAFETY AND FEEDBACK (AgriRover) ── */}
            {isAgriRover && project.safetyFeedback && (
              <section id="safety" className="mb-16 scroll-mt-28">
                <SectionLabel>Safety and Feedback</SectionLabel>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-[1.25]">
                  {project.safetyFeedback.heading}
                </h3>
                <p className="text-[17px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  {project.safetyFeedback.body}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.safetyFeedback.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 p-5 flex flex-col justify-between"
                    >
                      <div>
                        {item.imageSrc && (
                          <div
                            onClick={() =>
                              setActiveLightbox({
                                src: item.imageSrc!,
                                alt: item.title,
                                caption: `${item.title}: ${item.subtitle} — ${item.description}`,
                              })
                            }
                            className="group relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 mb-4 cursor-zoom-in max-h-56 flex items-center justify-center"
                          >
                            <img
                              src={item.imageSrc}
                              alt={item.title}
                              className="w-full h-auto max-h-56 object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                              loading="lazy"
                            />
                            <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full glass-pill text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize2 size={13} />
                            </div>
                          </div>
                        )}
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                          {item.subtitle}
                        </span>
                        <h4 className="text-base font-bold text-neutral-900 dark:text-white mt-1 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* ── KEY SCREENS (Generic Projects without custom groups) ── */}
            {!isMediSync && !isMotorex && !isAgriRover && !isMotorage && project.keyScreens.length > 0 && (
              <section id="screens" className="mb-16 scroll-mt-28">
                <SectionLabel>Key Screens</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {project.keyScreens.map((s, i) => (
                    <div key={i} className="group">
                      <div
                        onClick={() =>
                          setActiveLightbox({
                            src: s.src,
                            alt: s.alt,
                            caption: s.caption,
                          })
                        }
                        className="relative rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 mb-2 shadow-sm cursor-zoom-in"
                      >
                        <img
                          src={s.src}
                          alt={s.alt}
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 p-1.5 rounded-full glass-pill text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 size={14} />
                        </div>
                      </div>
                      {s.caption && (
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
                          {s.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* ── IMPLEMENTATION & VALIDATION (Motorage) ── */}
            {isMotorage && project.implementation && (
              <section id="implementation" className="mb-16 scroll-mt-28">
                <SectionLabel>Implementation &amp; Validation</SectionLabel>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-[1.25]">
                  {project.implementation.heading}
                </h3>
                <p className="text-[17px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
                  {project.implementation.body}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.implementation.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl p-5 border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 flex flex-col justify-between"
                    >
                      <div>
                        {item.badge && (
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 mb-2.5 inline-block"
                            style={{ color: acc }}
                          >
                            {item.badge}
                          </span>
                        )}
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── DEMO VIDEO ── */}
            {project.videoSrc && (
              <section id="video" className="mb-16 scroll-mt-28">
                <SectionLabel>Demo Video</SectionLabel>
                {isMotorage && (
                  <p className="text-[16px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-6">
                    A continuous demonstration cycle captured directly from the desktop LVGL simulator, showcasing acceleration up to 48 km/h, steady-state driving, full-stop braking, the 2-second hold-to-reset interaction, fault injection and recovery on the Status screen, and instant navigation back to the Drive view.
                  </p>
                )}
                <VideoPlayer
                  src={project.videoSrc}
                  poster={project.videoPoster}
                  accent={acc}
                  className="aspect-video max-w-3xl"
                />
              </section>
            )}

            {/* ── OUTCOME ── */}
            <section id="outcome" className="mb-16 scroll-mt-28">
              <SectionLabel>{isMediSync ? 'Outcome & Limits' : 'Outcome'}</SectionLabel>

              {isMotorex && (
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-[1.25]">
                  A unified interface for vehicle monitoring and control.
                </h3>
              )}

              <div className="space-y-8">
                {/* Done */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: acc }}>
                    {isMotorex ? 'What was delivered' : 'What was done'}
                  </p>
                  <ul className="space-y-2">
                    {project.outcome.done.map((d, i) => (
                      <li
                        key={i}
                        className="flex gap-3 items-start text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: acc }} />
                        {renderFormattedText(d)}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Honest limits / Current limitations */}
                {project.outcome.honestLimits.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-neutral-400 dark:text-neutral-500">
                      {project.outcome.limitsHeading || 'Honest limits'}
                    </p>
                    <ul className="space-y-2">
                      {project.outcome.honestLimits.map((l, i) => (
                        <li
                          key={i}
                          className="flex gap-3 items-start text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                          {renderFormattedText(l)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Next steps */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-neutral-400 dark:text-neutral-500">
                    Next steps
                  </p>
                  <ul className="space-y-2">
                    {project.outcome.nextSteps.map((n, i) => (
                      <li
                        key={i}
                        className="flex gap-3 items-start text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full border border-neutral-300 dark:border-neutral-600 shrink-0" />
                        {renderFormattedText(n)}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Design reflection / Takeaway */}
                {project.outcome.takeaway && (
                  <div id="design-reflection">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-neutral-400 dark:text-neutral-500">
                      {project.outcome.takeawayHeading || 'Takeaway'}
                    </p>
                    <blockquote
                      className="border-l-2 pl-4 py-1 text-[15px] text-neutral-600 dark:text-neutral-300 italic leading-relaxed max-w-xl"
                      style={{ borderColor: acc }}
                    >
                      {project.outcome.takeaway}
                    </blockquote>
                  </div>
                )}
              </div>
            </section>
          </main>

          {/* Sticky Contents Sidebar: ~25% on desktop, hidden on <1024px */}
          <SectionNav sections={sections} />
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-500 mb-4">
      {children}
    </p>
  );
}

function renderFormattedText(text: string) {
  if (!text.includes('**')) return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-neutral-900 dark:text-neutral-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
