"use client";
import React, { useState } from "react";
import { Eye, Save, Upload, FileText, Bold, Italic, Underline, Heading2, Heading3, List, ListOrdered, Link, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LegalManagement() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="flex-1 w-full p-6 lg:p-8 overflow-y-auto space-y-8 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[32px] font-bold text-[#1E3A8A]">Legal Document Management</h1>
          <p className="text-slate-500 font-medium text-base">
            Manage Privacy Policy and Terms of Service
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 font-semibold rounded-lg shadow-sm">
            <Eye className="w-4 h-4" />
            Preview
          </Button>
          <Button className="flex items-center gap-2 bg-[#38B6FF] hover:bg-[#38B6FF]/90 text-white font-semibold rounded-lg shadow-sm">
            <Save className="w-4 h-4" />
            Save Draft
          </Button>
          <Button className="flex items-center gap-2 bg-[#002D71] hover:bg-[#002D71]/90 text-white font-semibold rounded-lg shadow-sm">
            <Upload className="w-4 h-4" />
            Publish Live
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveTab("privacy")}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors",
            activeTab === "privacy" 
              ? "bg-[#38B6FF] text-white shadow-sm" 
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          )}
        >
          <FileText className="w-4 h-4" />
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveTab("terms")}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors",
            activeTab === "terms" 
              ? "bg-[#38B6FF] text-white shadow-sm" 
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          )}
        >
          <FileText className="w-4 h-4" />
          Terms of Service
        </button>
      </div>

      {/* Editor Section */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Editor Toolbar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center flex-wrap gap-2 bg-slate-50/50">
          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-lg">
            <button className="p-2 hover:bg-slate-100 rounded text-slate-700 transition-colors"><Bold className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-slate-100 rounded text-slate-700 transition-colors"><Italic className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-slate-100 rounded text-slate-700 transition-colors"><Underline className="w-4 h-4" /></button>
          </div>
          
          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-lg">
            <button className="px-3 py-1.5 hover:bg-slate-100 rounded text-slate-700 font-bold text-sm transition-colors">H2</button>
            <button className="px-3 py-1.5 hover:bg-slate-100 rounded text-slate-700 font-bold text-sm transition-colors">H3</button>
          </div>

          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-lg">
            <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-slate-100 rounded text-slate-700 text-sm font-medium transition-colors">
              <List className="w-4 h-4" /> List
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-slate-100 rounded text-slate-700 text-sm font-medium transition-colors">
              <ListOrdered className="w-4 h-4" /> 1. List
            </button>
          </div>

          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-lg ml-auto sm:ml-0">
            <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-slate-100 rounded text-slate-700 text-sm font-medium transition-colors">
              <Link className="w-4 h-4" /> Link
            </button>
          </div>

          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-lg">
            <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-slate-100 rounded text-slate-700 text-sm font-medium transition-colors">
              <X className="w-4 h-4" /> Clear
            </button>
          </div>
        </div>

        {/* Editor Content */}
        <div className="p-8 outline-none min-h-[400px] text-slate-800" contentEditable suppressContentEditableWarning>
          <h1 className="text-2xl font-bold mb-2">Privacy Policy for 4HospiceRx</h1>
          <p className="font-semibold mb-6 text-slate-700">Last Updated:<span className="font-normal text-slate-600 ml-1">February 15, 2026</span></p>

          <h2 className="text-lg font-bold mb-2">1. Information We Collect</h2>
          <p className="mb-2 text-slate-700">We collect information that you provide directly to us when using our clinical decision support tools, including:</p>
          <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
            <li>Professional credentials and contact information</li>
            <li>Tool usage data and clinical queries</li>
            <li>Account preferences and settings</li>
          </ul>

          <h2 className="text-lg font-bold mb-2">2. How We Use Your Information</h2>
          <p className="mb-2 text-slate-700">Your information is used to:</p>
          <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
            <li>Provide and improve our healthcare tools</li>
            <li>Communicate important updates and notifications</li>
            <li>Ensure platform security and prevent fraud</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2 className="text-lg font-bold mb-2">3. Data Security</h2>
          <p className="mb-6 text-slate-700">We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits.</p>

          <h2 className="text-lg font-bold mb-2">4. Your Rights</h2>
          <p className="mb-2 text-slate-700">Under GDPR and CCPA, you have the right to:</p>
          <ul className="list-disc pl-5 pb-6 text-slate-700 space-y-1">
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Opt-out of data sharing</li>
            <li>Receive data portability</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-sm text-slate-500 font-medium">
          <div>Last saved: 2 minutes ago</div>
          <div>Status: Draft</div>
        </div>
      </div>
    </div>
  );
}
