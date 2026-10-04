import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
  Sparkles,
  Compass,
  Layers,
  Cpu,
  Glasses,
  Bot,
  Plane,
  Box,
  ArrowRight,
  Target,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Hero Banner */}
      <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0c1628] via-[#0d1d3a] to-[#0a1222] border border-cyan-500/30 text-center relative overflow-hidden">
        <div className="inline-flex p-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 mb-4 shadow-lg shadow-cyan-500/20">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="cyan">Program Vision</Badge>
          <Badge variant="blue">Self-Paced Architecture</Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
          About the ARCS 80-Day Technology Program
        </h1>
        <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          An engineering-first self-learning platform designed to guide students from technology curiosity to working interactive prototypes, digital assistants, and spatial XR environments.
        </p>
      </div>

      {/* Core Philosophy */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          <span>The Self-Paced Discovery Philosophy</span>
        </h2>
        <Card variant="glass" className="p-6 space-y-4 text-sm md:text-base text-slate-300 leading-relaxed">
          <p>
            The ARCS 80-Day Technology Program is built around a project-first, experimental learning mindset. Students are not expected to know programming or 3D development before starting. Instead, learners navigate at their own pace through 16 modular milestones.
          </p>
          <p>
            Each milestone guides the student through five distinct phases of mastery:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2 font-mono text-xs text-center">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-cyan-400 font-bold block mb-1">01. LEARN</span>
              <span className="text-slate-400">Core Concepts & Mental Models</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-blue-400 font-bold block mb-1">02. EXPLORE</span>
              <span className="text-slate-400">Live Demos & Investigations</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-indigo-400 font-bold block mb-1">03. QUESTION</span>
              <span className="text-slate-400">Technical Inquiries</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-amber-400 font-bold block mb-1">04. PRACTICE</span>
              <span className="text-slate-400">Hands-on Engineering Tasks</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-emerald-400 font-bold block mb-1">05. DOCUMENT</span>
              <span className="text-slate-400">Failure Logs & Portfolio</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Artificial Intelligence Track Breakdown (Modules 1-4) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-400" />
          <span>Part 1: Artificial Intelligence Track (Days 1–20)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="glass" className="p-5 border-l-4 border-l-cyan-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-cyan-400">MODULE 01 (Days 1–5)</span>
              <Badge variant="cyan">Curiosity</Badge>
            </div>
            <h3 className="text-base font-bold text-white">AI Fundamentals</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "What can AI recognize?" — Inputs, pattern recognition, and outputs.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-cyan-300">
              Output: AI Recognition Experiment
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-blue-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-blue-400">MODULE 02 (Days 6–10)</span>
              <Badge variant="blue">Understanding</Badge>
            </div>
            <h3 className="text-base font-bold text-white">AI Interaction & Assistants</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "How can I communicate with AI?" — Asking better questions and building digital assistants.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-blue-300">
              Output: Digital Assistant Prototype
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-amber-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-400">MODULE 03 (Days 11–15)</span>
              <Badge variant="amber">Problem-Solving</Badge>
            </div>
            <h3 className="text-base font-bold text-white">AI in Everyday Applications</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Where can AI solve a real problem?" — Real-world industry use cases and 5-step problem solving.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-amber-300">
              Output: AI Problem Solver
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-emerald-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-emerald-400">MODULE 04 (Days 16–20)</span>
              <Badge variant="emerald">Creation</Badge>
            </div>
            <h3 className="text-base font-bold text-white">AI Mini Project</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Can I build something useful with AI?" — Turn an idea into an end-to-end working MVP.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-emerald-300">
              Output: Working AI MVP & 10-Point Presentation
            </div>
          </Card>
        </div>
      </div>

      {/* AR + VR Spatial Computing Track Breakdown (Modules 5-8) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Glasses className="w-5 h-5 text-purple-400" />
          <span>Part 2: Augmented & Virtual Reality Track (Days 21–40)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="glass" className="p-5 border-l-4 border-l-purple-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-purple-400">MODULE 05 (Days 21–25)</span>
              <Badge variant="purple">Spatial Interaction</Badge>
            </div>
            <h3 className="text-base font-bold text-white">Augmented Reality Fundamentals</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Can I interact with a digital object?" — Real World + Digital Information = AR.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-purple-300">
              Output: Interactive 3D World Scene
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-indigo-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-indigo-400">MODULE 06 (Days 26–30)</span>
              <Badge variant="indigo">Virtual Worlds</Badge>
            </div>
            <h3 className="text-base font-bold text-white">Virtual Reality Fundamentals</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Can I explore a digital world?" — Building virtual classrooms, labs, and factories.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-indigo-300">
              Output: Navigable Virtual Environment
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-blue-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-blue-400">MODULE 07 (Days 31–35)</span>
              <Badge variant="blue">Industry Solutions</Badge>
            </div>
            <h3 className="text-base font-bold text-white">AR/VR for Real-World Applications</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Can AR/VR help solve a real problem?" — Industrial machine training, medicine, and smart farming.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-blue-300">
              Output: AR/VR Solution Prototype
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-emerald-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-emerald-400">MODULE 08 (Days 36–40)</span>
              <Badge variant="emerald">Spatial MVP</Badge>
            </div>
            <h3 className="text-base font-bold text-white">AR/VR Mini Project</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Can I build an interactive experience around that problem?" — Full 3D interactive application MVP.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-emerald-300">
              Output: Interactive AR/VR MVP & 11-Point Presentation
            </div>
          </Card>
        </div>
      </div>

      {/* Part 3: IoT + Satellite & Spatial Technology Track (Modules 9-12) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Plane className="w-5 h-5 text-emerald-400" />
          <span>Part 3: IoT + Satellite & Spatial Technology Track (Days 41–60)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="glass" className="p-5 border-l-4 border-l-cyan-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-cyan-400">MODULE 09 (Days 41–45)</span>
              <Badge variant="cyan">Physical Sensing</Badge>
            </div>
            <h3 className="text-base font-bold text-white">IoT Fundamentals</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Can a device sense something happening?" — Physical World → Sensor → Data → Decision → Action.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-cyan-300">
              Output: My Smart Object (Sense & Respond Prototype)
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-blue-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-blue-400">MODULE 10 (Days 46–50)</span>
              <Badge variant="blue">Telemetry Dashboard</Badge>
            </div>
            <h3 className="text-base font-bold text-white">IoT Applications</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Can I collect and understand information from multiple sensors?" — Multi-sensor stream monitoring and threshold alerts.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-blue-300">
              Output: IoT Monitoring Dashboard & Recommendations
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-indigo-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-indigo-400">MODULE 11 (Days 51–55)</span>
              <Badge variant="indigo">Orbital Observation</Badge>
            </div>
            <h3 className="text-base font-bold text-white">Spatial + Satellite Technology</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Can I understand WHERE something is and observe large areas from space?" — Digital maps, coordinates, and satellite imagery analysis.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-indigo-300">
              Output: Spatial & Satellite Observation Report
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-emerald-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-emerald-400">MODULE 12 (Days 56–60)</span>
              <Badge variant="emerald">Integrated System</Badge>
            </div>
            <h3 className="text-base font-bold text-white">Spatial + IoT + Satellite Integrated Project</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Can I combine location + satellite + ground sensor data?" — Ground-to-space real-time monitoring system.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-emerald-300">
              Output: Ground + Spatial + Space Monitoring MVP
            </div>
          </Card>
        </div>
      </div>

      {/* Part 4: Robotics + Drones + 3D Printing + ARCS Integration Track (Modules 13-16) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Bot className="w-5 h-5 text-amber-400" />
          <span>Part 4: Robotics, Drones, 3D Printing & ARCS Integration Track (Days 61–80)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="glass" className="p-5 border-l-4 border-l-amber-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-400">MODULE 13 (Days 61–65)</span>
              <Badge variant="amber">Sense & Move</Badge>
            </div>
            <h3 className="text-base font-bold text-white">Robotics Fundamentals</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Make a machine sense, think, and move." — Sensor → Decision → Movement loop.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-amber-300">
              Output: My Robot (Obstacle-Avoiding Rover)
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-cyan-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-cyan-400">MODULE 14 (Days 66–70)</span>
              <Badge variant="cyan">Aerial Missions</Badge>
            </div>
            <h3 className="text-base font-bold text-white">Drone Technology</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Observe and inspect from above." — Waypoint mission design, aerial inspection, and SAR.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-cyan-300">
              Output: My Drone Mission (Inspection Flight Plan)
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-purple-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-purple-400">MODULE 15 (Days 71–75)</span>
              <Badge variant="purple">Digital Fabrication</Badge>
            </div>
            <h3 className="text-base font-bold text-white">3D Printing</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "Turn an idea into a physical object." — Problem → Idea → Design → Print → Test → Improve.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-purple-300">
              Output: My 3D Printed Solution (Functional CAD Model)
            </div>
          </Card>

          <Card variant="glass" className="p-5 border-l-4 border-l-emerald-400">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-emerald-400">MODULE 16 (Days 76–80)</span>
              <Badge variant="emerald">Capstone Integration</Badge>
            </div>
            <h3 className="text-base font-bold text-white">ARCS Integrated Technology Project</h3>
            <p className="text-xs text-slate-300 mt-1 mb-3">
              "From Technology Learner to Problem Solver." — Synthesizing all 7 ARCS technologies into a working MVP.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900/60 text-xs font-mono text-emerald-300">
              Output: Integrated ARCS MVP & Graduation Presentation
            </div>
          </Card>
        </div>
      </div>

      {/* The Complete 80-Day Progression Summary */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-cyan-400" />
          <span>The Complete 80-Day Learning Progression</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-cyan-500/20 space-y-1">
            <span className="font-mono font-bold text-cyan-400 block">DAYS 1–20: AI</span>
            <span className="text-slate-300 font-medium block">Understand → Interact → Apply → Build</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-purple-500/20 space-y-1">
            <span className="font-mono font-bold text-purple-400 block">DAYS 21–40: AR + VR</span>
            <span className="text-slate-300 font-medium block">Explore → Create → Apply → Build</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-blue-500/20 space-y-1">
            <span className="font-mono font-bold text-blue-400 block">DAYS 41–60: IoT + SATELLITE</span>
            <span className="text-slate-300 font-medium block">Sense → Monitor → Observe → Combine</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/20 space-y-1">
            <span className="font-mono font-bold text-emerald-400 block">DAYS 61–80: ROBOTICS + DRONES + 3D + ARCS</span>
            <span className="text-slate-300 font-medium block">Move → Fly → Build → Integrate</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/30 text-slate-300 text-xs md:text-sm leading-relaxed italic text-center">
          “I can identify a problem, understand what information is needed, choose an appropriate technology, build a simple prototype, experiment with it, learn from failure, and explain my solution.”
        </div>
      </div>

      {/* Call to action */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Ready to begin your journey?</h3>
        <p className="text-xs md:text-sm text-slate-300 max-w-md mx-auto">
          Start with Module 01: AI Fundamentals or jump to any module across the 80-day program.
        </p>
        <div className="flex justify-center gap-3">
          <Link to="/module/module-01/day/day-01">
            <Button variant="glow" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Start Day 01
            </Button>
          </Link>
          <Link to="/roadmap">
            <Button variant="secondary">
              View 80-Day Roadmap
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
