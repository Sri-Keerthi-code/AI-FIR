import { jsPDF } from "jspdf";
import firData from "../data/firData";

export function generatePDF(summary: string) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("AI-FIR REPORT", 20, 20);

  doc.setFontSize(12);

  doc.text(`Complainant Name: ${firData.name}`, 20, 40);
  doc.text(`Phone Number: ${firData.phone}`, 20, 50);
  doc.text(`Address: ${firData.address}`, 20, 60);
  doc.text(`Incident Location: ${firData.location}`, 20, 70);
  doc.text(`Incident Date/Time: ${firData.date}`, 20, 80);

  doc.setFontSize(14);
  doc.text("FIR SUMMARY", 20, 100);

  doc.setFontSize(11);

  const splitSummary = doc.splitTextToSize(summary, 170);
  doc.text(splitSummary, 20, 115);

  doc.save("AI_FIR_Report.pdf");
}