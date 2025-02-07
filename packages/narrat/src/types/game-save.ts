import { AudioSave } from '@/stores/audio-store';
import { DialogSave } from '@/stores/dialog-store';
import { HudSave } from '@/stores/hud-stats-store';
import { InventorySave } from '@/stores/inventory-store';
import { MainSaveData } from '@/stores/main-store';
import { QuestLogSave } from '@/stores/quest-log';
import { ScreenSave } from '@/stores/screens-store';
import { SkillsSave } from '@/stores/skills';
import { SpriteStoreSave } from '@/stores/sprites-store';
import { VMSave } from '@/stores/vm-store';

export interface SaveSlot {
  slotType: 'manual' | 'auto';
  id: string;
  saveData: GameSave | null;
  slotNumber: number;
}
export type GameSave = {
  version: string;
  skills: SkillsSave;
  screen: ScreenSave;
  main: MainSaveData;
  dialog: DialogSave;
  vm: VMSave;
  audio: AudioSave;
  hud: HudSave;
  inventory: InventorySave;
  quests: QuestLogSave;
  metadata: SaveSlotMetadata;
  sprites: SpriteStoreSave;
};

export interface SaveSlotMetadata {
  saveDate: string;
  name: string;
}

export type StoredSaveFile = SaveFile;
export type SaveFile = {
  version: string;
  slots: Array<SaveSlot>;
  lastSaveSlot?: string;
};
