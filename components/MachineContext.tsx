'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ControlMode = 'MANUAL' | 'ASSISTED' | 'AUTONOMY';

interface MachineState {
  isRunning: boolean;
  setIsRunning: (val: boolean) => void;
  controlMode: ControlMode;
  setControlMode: (mode: ControlMode) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  heading: number;
  setHeading: (heading: number) => void;
  bladeLoad: number;
  setBladeLoad: (load: number) => void;
  taskProgress: number;
  setTaskProgress: (progress: number) => void;
}

const MachineContext = createContext<MachineState | undefined>(undefined);

export function MachineProvider({ children }: { children: ReactNode }) {
  const [isRunning, setIsRunning] = useState(false);
  const [controlMode, setControlMode] = useState<ControlMode>('AUTONOMY');
  const [speed, setSpeed] = useState(0);
  const [heading, setHeading] = useState(244);
  const [bladeLoad, setBladeLoad] = useState(50);
  const [taskProgress, setTaskProgress] = useState(100);

  return (
    <MachineContext.Provider
      value={{
        isRunning,
        setIsRunning,
        controlMode,
        setControlMode,
        speed,
        setSpeed,
        heading,
        setHeading,
        bladeLoad,
        setBladeLoad,
        taskProgress,
        setTaskProgress,
      }}
    >
      {children}
    </MachineContext.Provider>
  );
}

export function useMachine() {
  const context = useContext(MachineContext);
  if (context === undefined) {
    throw new Error('useMachine must be used within a MachineProvider');
  }
  return context;
}
