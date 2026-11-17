import rawAgrirover from './agrirover';
import rawMotorex from './motorex';
import rawMotorage from './motorage';
import rawMedisync from './medisync';
import type { ProjectData } from './types';
import { asset } from '../utils/asset';

function resolveProjectAssets(project: ProjectData): ProjectData {
  return {
    ...project,
    coverMedia: {
      ...project.coverMedia,
      src: asset(project.coverMedia.src),
      poster: project.coverMedia.poster ? asset(project.coverMedia.poster) : undefined,
    },
    physicalPhoto: project.physicalPhoto
      ? {
          ...project.physicalPhoto,
          src: asset(project.physicalPhoto.src),
        }
      : undefined,
    architecture: project.architecture
      ? {
          ...project.architecture,
          diagramSrc: project.architecture.diagramSrc
            ? asset(project.architecture.diagramSrc)
            : undefined,
        }
      : undefined,
    processSections: project.processSections?.map((ps) => ({
      ...ps,
      media: ps.media
        ? {
            ...ps.media,
            src: ps.media.src ? asset(ps.media.src) : undefined,
            srcs: ps.media.srcs ? ps.media.srcs.map((s) => asset(s)) : undefined,
          }
        : undefined,
    })),
    screenshotGroups: project.screenshotGroups?.map((group) => ({
      ...group,
      screens: group.screens.map((screen) => ({
        ...screen,
        src: asset(screen.src),
      })),
    })),
    designSystem: project.designSystem
      ? {
          ...project.designSystem,
          components: project.designSystem.components.map((comp) => ({
            ...comp,
            imageSrc: comp.imageSrc ? asset(comp.imageSrc) : undefined,
          })),
        }
      : undefined,
    safetyFeedback: project.safetyFeedback
      ? {
          ...project.safetyFeedback,
          items: project.safetyFeedback.items.map((item) => ({
            ...item,
            imageSrc: item.imageSrc ? asset(item.imageSrc) : undefined,
          })),
        }
      : undefined,
    keyScreens: project.keyScreens?.map((s) => ({
      ...s,
      src: asset(s.src),
    })),
    videoSrc: project.videoSrc ? asset(project.videoSrc) : undefined,
    videoPoster: project.videoPoster ? asset(project.videoPoster) : undefined,
  };
}

export const agrirover: ProjectData = resolveProjectAssets(rawAgrirover);
export const motorex: ProjectData = resolveProjectAssets(rawMotorex);
export const motorage: ProjectData = resolveProjectAssets(rawMotorage);
export const medisync: ProjectData = resolveProjectAssets(rawMedisync);

export const projects: ProjectData[] = [agrirover, motorex, motorage, medisync];
export type { ProjectData };
