import * as pdfjsLib from "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";

const { PDFDocument, StandardFonts, rgb } = window.PDFLib;
const SignaturePad = window.SignaturePad;

const I18N = {
  lv: {
    "ui.pageTitle": "GASTRO dokumentu parakstīšanas demo",
    "ui.clientDemo": "Klienta demo",
    "ui.demoModeLabel": "Demo režīms:",
    "ui.demoModeBody": "Ārsta kvalificētā parakstīšana ir simulēta (Smart-ID stila apstiprinājums un audita zīmogs).",
    "ui.documentView": "Dokumenta skats",
    "ui.downloadCurrentPdf": "Lejupielādēt pašreizējo PDF",
    "ui.placeSignatureLabel": "Novietot parakstu:",
    "ui.placeSignatureHelp": "pārvietojiet kursoru dokumentā un klikšķiniet vietā, kur jāparādās parakstam.",
    "ui.useDefaultLine": "Lietot noklusējuma līniju",
    "ui.cancel": "Atcelt",
    "ui.addVisualSignature": "Pievienot vizuālo parakstu",
    "ui.drawAndConfirmSignature": "Uzzīmējiet parakstu un apstipriniet, lai ievietotu to izvēlētajā paraksta laukā.",
    "ui.clear": "Notīrīt",
    "ui.useSignature": "Lietot parakstu",
    "ui.smartIdQualifiedSigning": "Smart-ID kvalificēta parakstīšana",
    "ui.approveWithCode": "Apstipriniet parakstīšanu Smart-ID lietotnē, izmantojot kodu:",
    "ui.simulationOnly": "Simulācija tikai demonstrācijas vajadzībām.",
    "ui.approveSigning": "Apstiprināt parakstīšanu",
    "ui.footerCopyright": "© {year} SIA \"Gremošanas slimību centrs GASTRO\". Visas tiesības aizsargātas.",
    "step.1": "Pacients aizpilda un paraksta pirmo piekrišanu",
    "step.2": "Ārsts aizpilda un paraksta ar Smart-ID simulāciju",
    "step.3": "Pacients apstiprina, pievienojot noslēguma parakstu",
    "step.4": "Process pabeigts",
    "doc.title1": "1. solis: Pacienta rakstiska piekrišana datu apstrādei",
    "doc.title2": "2./3. solis: Informēta piekrišana medicīniskai procedūrai",
    "field.consentNumber": "Piekrišanas numurs",
    "field.patientName": "Pacienta vārds, uzvārds",
    "field.patientCode": "Pacienta personas kods",
    "field.patientSignatureDoc1": "Pacienta paraksts",
    "field.patientNameDoc2": "Pacienta vārds, uzvārds",
    "field.patientCodeDoc2": "Pacienta personas kods",
    "field.procedureName": "Procedūras nosaukums",
    "field.doctorName": "Ārsta vārds, uzvārds",
    "field.extraNotes": "Papildus informācija",
    "field.doctorQualifiedStamp": "Kvalificētā paraksta zīmogs",
    "field.doctorSignatureLine": "Ārsta paraksta rinda",
    "field.patientFinalSignature": "Pacienta noslēguma paraksts",
    "flow.stepPrefix": "solis",
    "flow.patientData": "Pacienta dati",
    "flow.completeStep1": "Pabeigt 1. soli",
    "flow.doctorDataSigning": "Ārsta dati + kvalificētā parakstīšana",
    "flow.smartIdApproved": "Smart-ID apstiprināts",
    "flow.startSmartIdSigning": "Sākt Smart-ID parakstīšanu",
    "flow.completeStep2": "Pabeigt 2. soli",
    "flow.patientFinalConfirmation": "Pacienta noslēguma apstiprinājums",
    "flow.docHasDoctorSign": "Dokuments jau satur ārsta kvalificēto parakstu. Pacients pievieno noslēguma vizuālo parakstu.",
    "flow.finishWorkflow": "Pabeigt procesu",
    "flow.allDone": "Visi soļi pabeigti",
    "flow.completedBody": "Process veiksmīgi pabeigts. Ģenerētie faili ir gatavi demonstrācijai un lejupielādei.",
    "flow.downloadStep1": "Lejupielādēt 1. soļa parakstīto PDF",
    "flow.downloadFinal": "Lejupielādēt gala parakstīto PDF",
    "flow.restartDemo": "Sākt no jauna",
    "sig.updateSignature": "Atjaunot parakstu",
    "sig.addSignature": "Pievienot parakstu",
    "sig.signaturePreview": "Paraksta priekšskatījums",
    "sig.approved": "Kvalificētais paraksts apstiprināts",
    "sig.awaitingApproval": "Gaida Smart-ID apstiprinājumu",
    "sig.clickToSign": "Klikšķiniet, lai parakstītu",
    "sig.qualifiedStampTitle": "Kvalificēts eParaksts",
    "sig.smartIdSimulation": "Smart-ID SIMULĀCIJA",
    "sig.doctorFallback": "Ārsts",
    "sig.qualifiedPending": "Kvalificētais eParaksts gaida apstiprinājumu",
    "sig.signedDigitally": "Parakstīts digitāli",
    "sig.awaitingSmartSigning": "Gaida Smart-ID parakstīšanu",
    "sig.placePointer": "Klikšķiniet, lai novietotu parakstu",
    "status.signaturePlaced": "Paraksts novietots dokumentā.",
    "status.clickToPlace": "Klikšķiniet dokumentā, lai novietotu šo parakstu.",
    "status.placedDefault": "Paraksts novietots noklusējuma rindā.",
    "status.placementCanceled": "Paraksta novietošana atcelta.",
    "warn.requiredMissing": "Trūkst obligātie lauki",
    "warn.fillRequired": "Lūdzu aizpildiet",
    "warn.smartIdApprovalRequired": "Smart-ID kvalificētais apstiprinājums",
    "warn.signatureRequired": "Nepieciešams paraksts",
    "warn.addFinalSignature": "Lūdzu pievienojiet pacienta noslēguma parakstu.",
    "warn.noFileYet": "Fails vēl nav pieejams",
    "warn.noFileYetBody": "Ģenerēts PDF vēl nav pieejams.",
    "warn.signatureMissing": "Trūkst paraksta",
    "warn.drawSignatureFirst": "Lūdzu vispirms uzzīmējiet parakstu.",
    "err.step1Failed": "1. solis neizdevās",
    "err.step2Failed": "2. solis neizdevās",
    "err.step3Failed": "3. solis neizdevās",
    "err.signaturePlacementFailed": "Paraksta novietošana neizdevās",
    "err.signatureTargetMissing": "Paraksta mērķa lauks netika atrasts. Lūdzu mēģiniet vēlreiz.",
    "err.downloadFailed": "Lejupielāde neizdevās",
    "err.notice": "Paziņojums",
    "err.failedInit": "Neizdevās inicializēt demo",
    "err.runServerHint": "Palaidiet lokālo serveri šajā mapē, piemēram:"
  },
  en: {
    "ui.pageTitle": "GASTRO document signing demo",
    "ui.clientDemo": "Client demo",
    "ui.demoModeLabel": "Demo mode:",
    "ui.demoModeBody": "Doctor qualified signing is simulated (Smart-ID style approval and audit stamp).",
    "ui.documentView": "Document view",
    "ui.downloadCurrentPdf": "Download current PDF",
    "ui.placeSignatureLabel": "Place signature:",
    "ui.placeSignatureHelp": "move cursor over the document and click where the signature should appear.",
    "ui.useDefaultLine": "Use default line",
    "ui.cancel": "Cancel",
    "ui.addVisualSignature": "Add visual signature",
    "ui.drawAndConfirmSignature": "Draw signature and confirm to place it into the selected signature field.",
    "ui.clear": "Clear",
    "ui.useSignature": "Use signature",
    "ui.smartIdQualifiedSigning": "Smart-ID qualified signing",
    "ui.approveWithCode": "Approve signing in Smart-ID app using challenge code:",
    "ui.simulationOnly": "Simulation for demo purposes only.",
    "ui.approveSigning": "Approve signing",
    "ui.footerCopyright": "© {year} SIA \"Gremošanas slimību centrs GASTRO\". All rights reserved.",
    "step.1": "Patient fills and signs first consent",
    "step.2": "Doctor fills and signs with Smart-ID simulation",
    "step.3": "Patient confirms by adding final signature",
    "step.4": "Workflow completed",
    "doc.title1": "Step 1: Patient written consent for data processing",
    "doc.title2": "Step 2/3: Informed consent for medical procedure",
    "field.consentNumber": "Consent number",
    "field.patientName": "Patient full name",
    "field.patientCode": "Patient personal code",
    "field.patientSignatureDoc1": "Patient signature",
    "field.patientNameDoc2": "Patient full name",
    "field.patientCodeDoc2": "Patient personal code",
    "field.procedureName": "Procedure name",
    "field.doctorName": "Doctor full name",
    "field.extraNotes": "Additional information",
    "field.doctorQualifiedStamp": "Qualified signature stamp",
    "field.doctorSignatureLine": "Doctor signature line",
    "field.patientFinalSignature": "Patient final signature",
    "flow.stepPrefix": "step",
    "flow.patientData": "Patient data",
    "flow.completeStep1": "Complete Step 1",
    "flow.doctorDataSigning": "Doctor data + qualified signing",
    "flow.smartIdApproved": "Smart-ID approved",
    "flow.startSmartIdSigning": "Start Smart-ID signing",
    "flow.completeStep2": "Complete Step 2",
    "flow.patientFinalConfirmation": "Patient final confirmation",
    "flow.docHasDoctorSign": "Document already includes doctor qualified signature. Patient now adds final visual signature.",
    "flow.finishWorkflow": "Finish workflow",
    "flow.allDone": "All steps completed",
    "flow.completedBody": "Workflow completed successfully. Generated files are ready for demo and download.",
    "flow.downloadStep1": "Download Step 1 signed PDF",
    "flow.downloadFinal": "Download final signed PDF",
    "flow.restartDemo": "Restart demo",
    "sig.updateSignature": "Update signature",
    "sig.addSignature": "Add signature",
    "sig.signaturePreview": "Signature preview",
    "sig.approved": "Qualified signature approved",
    "sig.awaitingApproval": "Awaiting Smart-ID approval",
    "sig.clickToSign": "Click to sign",
    "sig.qualifiedStampTitle": "Qualified eSignature",
    "sig.smartIdSimulation": "Smart-ID SIMULATION",
    "sig.doctorFallback": "Doctor",
    "sig.qualifiedPending": "Qualified eSignature pending",
    "sig.signedDigitally": "Signed digitally",
    "sig.awaitingSmartSigning": "Awaiting Smart-ID signing",
    "sig.placePointer": "Click to place signature",
    "status.signaturePlaced": "Signature placed on document.",
    "status.clickToPlace": "Click on the document to place this signature.",
    "status.placedDefault": "Signature placed on default line.",
    "status.placementCanceled": "Signature placement canceled.",
    "warn.requiredMissing": "Required fields missing",
    "warn.fillRequired": "Please complete",
    "warn.smartIdApprovalRequired": "Smart-ID qualified approval",
    "warn.signatureRequired": "Signature required",
    "warn.addFinalSignature": "Please add patient final signature.",
    "warn.noFileYet": "No file yet",
    "warn.noFileYetBody": "No generated PDF is available yet.",
    "warn.signatureMissing": "Signature missing",
    "warn.drawSignatureFirst": "Please draw a signature first.",
    "err.step1Failed": "Step 1 failed",
    "err.step2Failed": "Step 2 failed",
    "err.step3Failed": "Step 3 failed",
    "err.signaturePlacementFailed": "Signature placement failed",
    "err.signatureTargetMissing": "Signature target field not found. Please retry.",
    "err.downloadFailed": "Download failed",
    "err.notice": "Notice",
    "err.failedInit": "Failed to initialize demo",
    "err.runServerHint": "Run a local server in this folder, for example:"
  }
};

const DOCS = {
  doc1: {
    key: "doc1",
    titleKey: "doc.title1",
    fileName: "piekrisana.pdf"
  },
  doc2: {
    key: "doc2",
    titleKey: "doc.title2",
    fileName: "Informēta piekrišana medicīniskas procedūras veikšanai.pdf"
  }
};

const STEPS = [
  {
    id: 1,
    labelKey: "step.1",
    doc: "doc1"
  },
  {
    id: 2,
    labelKey: "step.2",
    doc: "doc2"
  },
  {
    id: 3,
    labelKey: "step.3",
    doc: "doc2"
  },
  {
    id: 4,
    labelKey: "step.4",
    doc: "doc2"
  }
];

const fieldDefs = {
  doc1: [
    { id: "consentNumber", label: "Piekrišanas numurs", type: "text", page: 1, x: 434, y: 80, w: 118, h: 16, fontSize: 12, required: true },
    { id: "patientName", label: "Pacienta vārds, uzvārds", type: "text", page: 1, x: 99, y: 149, w: 62, h: 16, fontSize: 12, required: true },
    { id: "patientCode", label: "Pacienta personas kods", type: "text", page: 1, x: 247, y: 149, w: 84, h: 16, fontSize: 12, required: true },
    { id: "patientSignatureDoc1", label: "Pacienta paraksts", type: "signature", page: 1, x: 144, y: 540, w: 178, h: 28, required: true }
  ],
  doc2: [
    { id: "patientNameDoc2", label: "Pacienta vārds, uzvārds", type: "text", page: 1, x: 178, y: 108, w: 68, h: 18, fontSize: 12, required: true },
    { id: "patientCodeDoc2", label: "Pacienta personas kods", type: "text", page: 1, x: 123, y: 130, w: 92, h: 18, fontSize: 12, required: true },
    { id: "procedureName", label: "Procedūras nosaukums", type: "text", page: 1, x: 156, y: 165, w: 134, h: 18, fontSize: 12, required: true },
    { id: "doctorName", label: "Ārsta vārds, uzvārds", type: "text", page: 1, x: 185, y: 189, w: 72, h: 18, fontSize: 12, required: true },
    { id: "extraNotes", label: "Papildus informācija", type: "textarea", page: 2, x: 77, y: 330, w: 442, h: 50, fontSize: 10, required: false },
    { id: "doctorQualifiedStamp", label: "Kvalificētā paraksta zīmogs", type: "stamp", page: 2, x: 333, y: 487, w: 178, h: 64, required: true },
    { id: "doctorSignatureLine", label: "Ārsta paraksta rinda", type: "stampLine", page: 2, x: 159, y: 497, w: 156, h: 23, required: true },
    { id: "patientFinalSignature", label: "Pacienta noslēguma paraksts", type: "signature", page: 2, x: 145, y: 576, w: 174, h: 26, required: true }
  ]
};

function buildDefaultSignaturePlacements() {
  const out = {};
  for (const def of [...fieldDefs.doc1, ...fieldDefs.doc2]) {
    if (def.type === "signature") {
      out[def.id] = { page: def.page, x: def.x, y: def.y };
    }
  }
  return out;
}

const defaultSignaturePlacements = buildDefaultSignaturePlacements();

const clearMasks = {
  doc1: [
    { fieldId: "consentNumber", page: 1, x: 431, y: 80, w: 125, h: 16 },
    { fieldId: "patientName", page: 1, x: 99, y: 149, w: 62, h: 16 },
    { fieldId: "patientCode", page: 1, x: 247, y: 149, w: 84, h: 16 }
  ],
  doc2: [
    { fieldId: "patientNameDoc2", page: 1, x: 178, y: 108, w: 68, h: 18 },
    { fieldId: "patientCodeDoc2", page: 1, x: 123, y: 130, w: 92, h: 18 },
    { fieldId: "procedureName", page: 1, x: 156, y: 165, w: 134, h: 20 },
    { fieldId: "doctorName", page: 1, x: 185, y: 189, w: 72, h: 20 },
    { fieldId: "extraNotes", page: 2, x: 77, y: 333, w: 442, h: 57 },
    { fieldId: "patientFinalSignature", page: 2, x: 286, y: 576, w: 112, h: 22 }
  ]
};

const state = {
  step: 1,
  values: {
    consentNumber: "",
    patientName: "",
    patientCode: "",
    patientNameDoc2: "",
    patientCodeDoc2: "",
    procedureName: "",
    doctorName: "",
    extraNotes: "",
    doctorSignedAt: ""
  },
  signatures: {
    patientSignatureDoc1: "",
    patientFinalSignature: ""
  },
  smartId: {
    approved: false,
    challenge: "",
    signedAtISO: "",
    certSerial: "",
    documentHash: ""
  },
  pdfBytes: {
    doc1Original: null,
    doc2Original: null,
    doc1Signed: null,
    doc2DoctorSigned: null,
    doc2Final: null
  },
  pendingSignatureField: "",
  activePlacementField: "",
  lang: "lv",
  signaturePlacements: JSON.parse(JSON.stringify(defaultSignaturePlacements))
};
let renderToken = 0;

const stepperEl = document.getElementById("stepper");
const stepContentEl = document.getElementById("stepContent");
const statusMessageEl = document.getElementById("statusMessage");
const noticeHostEl = document.getElementById("noticeHost");
const pdfContainerEl = document.getElementById("pdfContainer");
const docTitleEl = document.getElementById("docTitle");
const downloadCurrentBtn = document.getElementById("downloadCurrentBtn");
const placementHintEl = document.getElementById("placementHint");
const placementDefaultBtn = document.getElementById("placementDefaultBtn");
const placementCancelBtn = document.getElementById("placementCancelBtn");
const langLvBtn = document.getElementById("langLvBtn");
const langEnBtn = document.getElementById("langEnBtn");
const footerCopyEl = document.getElementById("footerCopy");

const signatureModal = document.getElementById("signatureModal");
const signatureCanvas = document.getElementById("signatureCanvas");
const smartIdModal = document.getElementById("smartIdModal");
const challengeCodeEl = document.getElementById("challengeCode");

const signaturePad = new SignaturePad(signatureCanvas, {
  minWidth: 1,
  maxWidth: 2.3,
  penColor: "#143c44"
});

function t(key) {
  return I18N[state.lang]?.[key] ?? I18N.lv?.[key] ?? key;
}

function fieldLabel(def) {
  return t(`field.${def.id}`) || def.label || def.id;
}

function applyStaticTranslations() {
  document.documentElement.lang = state.lang;
  document.title = t("ui.pageTitle");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  if (footerCopyEl) {
    footerCopyEl.textContent = t("ui.footerCopyright").replace("{year}", String(new Date().getFullYear()));
  }
  langLvBtn.classList.toggle("active", state.lang === "lv");
  langEnBtn.classList.toggle("active", state.lang === "en");
}

async function setLanguage(lang) {
  if (!I18N[lang] || state.lang === lang) {
    return;
  }
  state.lang = lang;
  applyStaticTranslations();
  await renderAll();
}

function nowDisplay() {
  return new Date().toLocaleString("lv-LV", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function randomHex(len) {
  const chars = "abcdef0123456789";
  let out = "";
  for (let i = 0; i < len; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

function getFieldDefById(fieldId) {
  return [...fieldDefs.doc1, ...fieldDefs.doc2].find((f) => f.id === fieldId);
}

function getSignaturePlacement(fieldId) {
  const current = state.signaturePlacements[fieldId];
  if (current) {
    return current;
  }
  return defaultSignaturePlacements[fieldId] || null;
}

function withDynamicPlacement(def) {
  if (def.type !== "signature") {
    return def;
  }
  const placement = getSignaturePlacement(def.id);
  if (!placement) {
    return def;
  }
  return { ...def, page: placement.page, x: placement.x, y: placement.y };
}

function setStatus(message = "") {
  if (statusMessageEl) {
    statusMessageEl.textContent = message;
  }
}

function updatePlacementHint() {
  if (!placementHintEl) {
    return;
  }
  placementHintEl.hidden = !state.activePlacementField;
}

function setPlacementMode(fieldId = "") {
  state.activePlacementField = fieldId;
  updatePlacementHint();
}

function notify({ type = "info", title = t("err.notice"), message = "", timeoutMs = 5200 } = {}) {
  if (!noticeHostEl) {
    return;
  }
  const item = document.createElement("div");
  item.className = `notice ${type}`;

  const titleEl = document.createElement("div");
  titleEl.className = "notice-title";
  titleEl.textContent = title;

  const bodyEl = document.createElement("div");
  bodyEl.className = "notice-body";
  bodyEl.textContent = message;

  item.appendChild(titleEl);
  item.appendChild(bodyEl);
  noticeHostEl.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, timeoutMs);
}

function flashSignatureField(fieldId) {
  const container = pdfContainerEl;
  if (!container) {
    return;
  }
  const boxes = Array.from(container.querySelectorAll(".signature-box"));
  const target = boxes.find((el) => {
    const img = el.querySelector("img");
    return img && img.src === state.signatures[fieldId];
  });
  if (!target) {
    return;
  }
  target.classList.add("flash");
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => target.classList.remove("flash"), 750);
}

async function fetchPdfBytes(fileName) {
  const response = await fetch(encodeURI(fileName));
  if (!response.ok) {
    throw new Error(`${t("err.failedInit")}: ${fileName}. ${t("err.runServerHint")} python -m http.server 5173`);
  }
  return new Uint8Array(await response.arrayBuffer());
}

async function ensurePdfCache() {
  if (!state.pdfBytes.doc1Original) {
    state.pdfBytes.doc1Original = await fetchPdfBytes(DOCS.doc1.fileName);
  }
  if (!state.pdfBytes.doc2Original) {
    state.pdfBytes.doc2Original = await fetchPdfBytes(DOCS.doc2.fileName);
  }
}

function renderStepper() {
  stepperEl.innerHTML = "";
  for (const step of STEPS) {
    const li = document.createElement("li");
    li.textContent = `${step.id}. ${t("flow.stepPrefix")}: ${t(step.labelKey)}`;
    if (state.step === step.id) {
      li.classList.add("active");
    }
    if (state.step > step.id) {
      li.classList.add("done");
    }
    stepperEl.appendChild(li);
  }
}

function getStepDocSource() {
  if (state.step === 1) {
    return { key: "doc1", bytes: state.pdfBytes.doc1Original };
  }
  if (state.step === 2) {
    return { key: "doc2", bytes: state.pdfBytes.doc2Original };
  }
  if (state.step === 3) {
    return { key: "doc2", bytes: state.pdfBytes.doc2DoctorSigned || state.pdfBytes.doc2Original };
  }
  return { key: "doc2", bytes: state.pdfBytes.doc2Final || state.pdfBytes.doc2DoctorSigned || state.pdfBytes.doc2Original };
}

function getOverlayFieldsForStep(docKey) {
  if (docKey === "doc1") {
    return fieldDefs.doc1;
  }
  if (state.step === 2) {
    return fieldDefs.doc2.filter((f) => !["patientFinalSignature"].includes(f.id));
  }
  if (state.step === 3) {
    return fieldDefs.doc2.filter((f) => ["patientFinalSignature", "doctorQualifiedStamp", "doctorSignatureLine"].includes(f.id));
  }
  return fieldDefs.doc2.filter((f) => ["doctorQualifiedStamp", "doctorSignatureLine", "patientFinalSignature"].includes(f.id));
}

function createFieldInput(def) {
  const wrap = document.createElement("div");
  wrap.className = "field";

  const label = document.createElement("label");
  label.htmlFor = `form_${def.id}`;
  label.textContent = fieldLabel(def);
  wrap.appendChild(label);

  if (def.type === "signature") {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ghost-btn";
    btn.textContent = state.signatures[def.id] ? t("sig.updateSignature") : t("sig.addSignature");
    btn.addEventListener("click", () => openSignatureModal(def.id));
    wrap.appendChild(btn);

    if (state.signatures[def.id]) {
      const preview = document.createElement("img");
      preview.src = state.signatures[def.id];
      preview.alt = t("sig.signaturePreview");
      preview.className = "signature-preview";
      wrap.appendChild(preview);
    }
    return wrap;
  }

  if (def.id === "doctorQualifiedStamp" || def.id === "doctorSignatureLine") {
    const status = document.createElement("div");
    status.className = "status-pill";

    const dot = document.createElement("span");
    dot.className = `status-dot ${state.smartId.approved ? "ok" : ""}`;

    const txt = document.createElement("span");
    txt.textContent = state.smartId.approved ? t("sig.approved") : t("sig.awaitingApproval");

    status.appendChild(dot);
    status.appendChild(txt);
    wrap.appendChild(status);
    return wrap;
  }

  const input = def.type === "textarea" ? document.createElement("textarea") : document.createElement("input");
  input.id = `form_${def.id}`;
  input.value = state.values[def.id] || "";
  input.addEventListener("input", (ev) => {
    state.values[def.id] = ev.target.value;
    renderPdf();
  });
  wrap.appendChild(input);
  return wrap;
}

function renderStepContent() {
  stepContentEl.innerHTML = "";
  const block = document.createElement("div");

  if (state.step === 1) {
    const title = document.createElement("h3");
    title.textContent = t("flow.patientData");
    block.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "form-grid";
    for (const def of fieldDefs.doc1) {
      grid.appendChild(createFieldInput(def));
    }
    block.appendChild(grid);

    const actions = document.createElement("div");
    actions.className = "action-row";
    const nextBtn = document.createElement("button");
    nextBtn.className = "primary-btn";
    nextBtn.type = "button";
    nextBtn.textContent = t("flow.completeStep1");
    nextBtn.addEventListener("click", completeStep1);
    actions.appendChild(nextBtn);
    block.appendChild(actions);
  }

  if (state.step === 2) {
    const title = document.createElement("h3");
    title.textContent = t("flow.doctorDataSigning");
    block.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "form-grid";
    for (const def of fieldDefs.doc2.filter((f) => !["patientFinalSignature", "doctorQualifiedStamp", "doctorSignatureLine"].includes(f.id))) {
      grid.appendChild(createFieldInput(def));
    }
    block.appendChild(grid);

    const actions = document.createElement("div");
    actions.className = "action-row";

    const signBtn = document.createElement("button");
    signBtn.className = "ghost-btn";
    signBtn.type = "button";
    signBtn.textContent = state.smartId.approved ? t("flow.smartIdApproved") : t("flow.startSmartIdSigning");
    signBtn.disabled = state.smartId.approved;
    signBtn.addEventListener("click", openSmartIdModal);

    const nextBtn = document.createElement("button");
    nextBtn.className = "primary-btn";
    nextBtn.type = "button";
    nextBtn.textContent = t("flow.completeStep2");
    nextBtn.addEventListener("click", completeStep2);

    actions.appendChild(signBtn);
    actions.appendChild(nextBtn);
    block.appendChild(actions);
  }

  if (state.step === 3) {
    const title = document.createElement("h3");
    title.textContent = t("flow.patientFinalConfirmation");
    block.appendChild(title);

    const text = document.createElement("p");
    text.className = "subtitle";
    text.textContent = t("flow.docHasDoctorSign");
    block.appendChild(text);

    const grid = document.createElement("div");
    grid.className = "form-grid";
    const def = fieldDefs.doc2.find((f) => f.id === "patientFinalSignature");
    grid.appendChild(createFieldInput(def));
    block.appendChild(grid);

    const actions = document.createElement("div");
    actions.className = "action-row";
    const nextBtn = document.createElement("button");
    nextBtn.className = "primary-btn";
    nextBtn.type = "button";
    nextBtn.textContent = t("flow.finishWorkflow");
    nextBtn.addEventListener("click", completeStep3);
    actions.appendChild(nextBtn);
    block.appendChild(actions);
  }

  if (state.step === 4) {
    const title = document.createElement("h3");
    title.textContent = t("flow.allDone");
    block.appendChild(title);

    const done = document.createElement("div");
    done.className = "completion";
    done.innerHTML = t("flow.completedBody");
    block.appendChild(done);

    const actions = document.createElement("div");
    actions.className = "action-row";

    const dl1 = document.createElement("button");
    dl1.type = "button";
    dl1.className = "ghost-btn";
    dl1.textContent = t("flow.downloadStep1");
    dl1.addEventListener("click", () => downloadBytes(state.pdfBytes.doc1Signed, "piekrisana.signed.step1.pdf"));

    const dl2 = document.createElement("button");
    dl2.type = "button";
    dl2.className = "primary-btn";
    dl2.textContent = t("flow.downloadFinal");
    dl2.addEventListener("click", () => downloadBytes(state.pdfBytes.doc2Final, "informed-consent.fully-signed.pdf"));

    const restart = document.createElement("button");
    restart.type = "button";
    restart.className = "ghost-btn";
    restart.textContent = t("flow.restartDemo");
    restart.addEventListener("click", resetDemo);

    actions.appendChild(dl1);
    actions.appendChild(dl2);
    actions.appendChild(restart);
    block.appendChild(actions);
  }

  stepContentEl.appendChild(block);
}

function overlayValue(def) {
  if (def.type === "signature") {
    return state.signatures[def.id] || "";
  }
  if (def.id === "doctorQualifiedStamp" || def.id === "doctorSignatureLine") {
    return state.smartId.approved;
  }
  if (def.id === "doctorSignedAt") {
    return state.values.doctorSignedAt || "";
  }
  return state.values[def.id] || "";
}

function isEditable(def) {
  if (state.step === 4) {
    return false;
  }
  if (def.type === "signature") {
    if (def.id === "patientFinalSignature") {
      return state.step === 3;
    }
    return state.step === 1;
  }
  if (def.id === "doctorQualifiedStamp" || def.id === "doctorSignatureLine") {
    return false;
  }
  if (def.id === "doctorSignedAt") {
    return state.step === 2;
  }
  if (state.step === 1 && def.page >= 1) {
    return def.id === "consentNumber" || def.id === "patientName" || def.id === "patientCode";
  }
  if (state.step === 2) {
    return true;
  }
  return false;
}

function createOverlayElement(def, scale) {
  const wrapper = document.createElement("div");
  wrapper.className = "overlay-item";
  wrapper.style.left = `${def.x * scale}px`;
  wrapper.style.top = `${def.y * scale}px`;
  wrapper.style.width = `${def.w * scale}px`;
  wrapper.style.height = `${def.h * scale}px`;

  if (def.type === "signature") {
    const box = document.createElement("button");
    box.type = "button";
    box.className = "signature-box";
    if (overlayValue(def)) {
      box.classList.add("has-signature");
      const img = document.createElement("img");
      img.src = overlayValue(def);
      img.alt = "Paraksts";
      box.appendChild(img);
    } else {
      box.textContent = t("sig.clickToSign");
    }

    if (isEditable(def)) {
      box.addEventListener("click", () => openSignatureModal(def.id));
    } else {
      box.disabled = true;
    }

    wrapper.appendChild(box);
    return wrapper;
  }

  if (def.id === "doctorQualifiedStamp") {
    const stamp = document.createElement("div");
    stamp.className = "doc-stamp";
    if (state.smartId.approved) {
      stamp.innerHTML = `
        ${t("sig.qualifiedStampTitle")}<br>
        ${t("sig.smartIdSimulation")}<br>
        ${state.values.doctorName || t("sig.doctorFallback")}<br>
        ${state.values.doctorSignedAt || ""}
      `;
    } else {
      stamp.textContent = t("sig.qualifiedPending");
    }
    wrapper.appendChild(stamp);
    return wrapper;
  }

  if (def.id === "doctorSignatureLine") {
    const stampLine = document.createElement("div");
    stampLine.className = "signature-box";
    stampLine.style.borderStyle = "solid";
    stampLine.style.cursor = "default";
    stampLine.textContent = state.smartId.approved ? `${t("sig.signedDigitally")}: ${state.values.doctorName || t("sig.doctorFallback")}` : t("sig.awaitingSmartSigning");
    wrapper.appendChild(stampLine);
    return wrapper;
  }

  if (def.type === "textarea") {
    const ta = document.createElement("textarea");
    ta.value = overlayValue(def);
    ta.readOnly = !isEditable(def);
    ta.addEventListener("input", (ev) => {
      state.values[def.id] = ev.target.value;
      renderStepContent();
    });
    wrapper.appendChild(ta);
    return wrapper;
  }

  const input = document.createElement("input");
  input.value = overlayValue(def);
  input.readOnly = !isEditable(def);
  input.addEventListener("input", (ev) => {
    state.values[def.id] = ev.target.value;
    renderStepContent();
    if (def.id === "doctorName" && state.smartId.approved) {
      renderPdf();
    }
  });
  wrapper.appendChild(input);
  return wrapper;
}

function addPageMasks(overlay, docKey, pageNo, scale, visibleFieldIds = []) {
  const visibleSet = new Set(visibleFieldIds);
  const masks = (clearMasks[docKey] || []).filter((m) => m.page === pageNo && (!m.fieldId || visibleSet.has(m.fieldId)));
  for (const mask of masks) {
    const maskEl = document.createElement("div");
    maskEl.className = "text-mask";
    maskEl.style.left = `${mask.x * scale}px`;
    maskEl.style.top = `${mask.y * scale}px`;
    maskEl.style.width = `${mask.w * scale}px`;
    maskEl.style.height = `${mask.h * scale}px`;
    overlay.appendChild(maskEl);
  }
}

async function renderPdf() {
  const currentToken = ++renderToken;
  const source = getStepDocSource();
  const docInfo = DOCS[source.key];
  docTitleEl.textContent = t(docInfo.titleKey);

  const task = pdfjsLib.getDocument({ data: source.bytes.slice() });
  const pdf = await task.promise;
  if (currentToken !== renderToken) {
    return;
  }

  pdfContainerEl.innerHTML = "";

  const basePage = await pdf.getPage(1);
  const baseViewport = basePage.getViewport({ scale: 1 });
  const maxWidth = Math.min(pdfContainerEl.clientWidth - 36, 900);
  const scale = maxWidth / baseViewport.width;

  const defs = getOverlayFieldsForStep(source.key).map(withDynamicPlacement);

  for (let pageNo = 1; pageNo <= pdf.numPages; pageNo += 1) {
    if (currentToken !== renderToken) {
      return;
    }
    const page = await pdf.getPage(pageNo);
    const viewport = page.getViewport({ scale });

    const wrap = document.createElement("div");
    wrap.className = "page-wrap";

    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    wrap.appendChild(canvas);

    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const currentDefs = defs.filter((f) => f.page === pageNo);
    addPageMasks(overlay, source.key, pageNo, scale, currentDefs.map((d) => d.id));
    for (const def of currentDefs) {
      overlay.appendChild(createOverlayElement(def, scale));
    }

    wrap.appendChild(overlay);
    pdfContainerEl.appendChild(wrap);

    if (state.activePlacementField) {
      const placementField = getFieldDefById(state.activePlacementField);
      const placementValue = state.signatures[state.activePlacementField];
      if (placementField && placementValue) {
        const ghost = document.createElement("div");
        ghost.className = "placement-ghost";
        ghost.style.width = `${placementField.w * scale}px`;
        ghost.style.height = `${placementField.h * scale}px`;
        const ghostImg = document.createElement("img");
        ghostImg.src = placementValue;
        ghostImg.alt = "Paraksta priekšskatījums";
        ghost.appendChild(ghostImg);
        overlay.appendChild(ghost);

        const pointer = document.createElement("div");
        pointer.className = "placement-pointer";
        pointer.innerHTML = `
          <div class="placement-pointer-dot"></div>
          <div class="placement-pointer-label">${t("sig.placePointer")}</div>
        `;
        overlay.appendChild(pointer);

        wrap.addEventListener("mousemove", (ev) => {
          const rect = wrap.getBoundingClientRect();
          const x = ev.clientX - rect.left;
          const y = ev.clientY - rect.top;
          const boxW = placementField.w * scale;
          const boxH = placementField.h * scale;
          const maxX = Math.max(0, viewport.width - boxW);
          const maxY = Math.max(0, viewport.height - boxH);
          const left = Math.max(0, Math.min(maxX, x - boxW / 2));
          const top = Math.max(0, Math.min(maxY, y - boxH / 2));
          ghost.style.left = `${left}px`;
          ghost.style.top = `${top}px`;
          ghost.style.display = "block";
          pointer.style.left = `${x}px`;
          pointer.style.top = `${y}px`;
          pointer.style.display = "block";
        });

        wrap.addEventListener("mouseleave", () => {
          ghost.style.display = "none";
          pointer.style.display = "none";
        });
      }

      wrap.classList.add("placement-mode");
      wrap.addEventListener("click", (ev) => {
        const fieldId = state.activePlacementField;
        const fieldDef = getFieldDefById(fieldId);
        if (!fieldDef || fieldDef.type !== "signature") {
          return;
        }
        const rect = wrap.getBoundingClientRect();
        const clickX = ev.clientX - rect.left;
        const clickY = ev.clientY - rect.top;
        const boxW = fieldDef.w * scale;
        const boxH = fieldDef.h * scale;
        const maxX = Math.max(0, viewport.width - boxW);
        const maxY = Math.max(0, viewport.height - boxH);
        const left = Math.max(0, Math.min(maxX, clickX - boxW / 2));
        const top = Math.max(0, Math.min(maxY, clickY - boxH / 2));

        state.signaturePlacements[fieldId] = {
          page: pageNo,
          x: left / scale,
          y: top / scale
        };
        setPlacementMode("");
        setStatus(t("status.signaturePlaced"));
        renderAll();
      });
    }

    await page.render({
      canvasContext: canvas.getContext("2d"),
      viewport
    }).promise;
  }
}

function openSignatureModal(fieldId) {
  state.pendingSignatureField = fieldId;
  setStatus("");
  signaturePad.clear();
  signatureModal.showModal();
}

function exportSignaturePng() {
  const srcCanvas = signaturePad.canvas;
  const out = document.createElement("canvas");
  out.width = srcCanvas.width;
  out.height = srcCanvas.height;
  const ctx = out.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, out.width, out.height);
  ctx.drawImage(srcCanvas, 0, 0);
  return out.toDataURL("image/png");
}

function openSmartIdModal() {
  state.smartId.challenge = `${Math.floor(1000 + Math.random() * 9000)}`;
  challengeCodeEl.textContent = state.smartId.challenge;
  smartIdModal.showModal();
}

function validateFields(defs, options = { smartIdRequired: false }) {
  const missing = [];
  for (const def of defs) {
    if (!def.required) {
      continue;
    }
    if (def.type === "signature" && !state.signatures[def.id]) {
      missing.push(fieldLabel(def));
    }
    if (["stamp", "stampLine"].includes(def.type)) {
      if (options.smartIdRequired && !state.smartId.approved) {
        missing.push(t("warn.smartIdApprovalRequired"));
      }
    }
    if (!["signature", "stamp", "stampLine"].includes(def.type) && !String(state.values[def.id] || "").trim()) {
      missing.push(fieldLabel(def));
    }
  }

  if (missing.length > 0) {
    notify({
      type: "warn",
      title: t("warn.requiredMissing"),
      message: `${t("warn.fillRequired")}:\n- ${missing.join("\n- ")}`
    });
    return false;
  }
  return true;
}

async function stampPdf(baseBytes, operations) {
  const pdf = await PDFDocument.load(baseBytes.slice());
  const font = await pdf.embedFont(StandardFonts.Helvetica);

  for (const op of operations) {
    const page = pdf.getPage(op.page - 1);
    const pageHeight = page.getHeight();

    if (op.kind === "text") {
      page.drawRectangle({
        x: op.x,
        y: pageHeight - op.y - op.h,
        width: op.w,
        height: op.h,
        color: rgb(1, 1, 1),
        opacity: 0.92
      });
      page.drawText(op.value, {
        x: op.x + 2,
        y: pageHeight - op.y - (op.fontSize || 12) - 2,
        size: op.fontSize || 12,
        font,
        color: rgb(0.1, 0.2, 0.23),
        lineHeight: (op.fontSize || 12) + 1
      });
    }

    if (op.kind === "textarea") {
      page.drawRectangle({
        x: op.x,
        y: pageHeight - op.y - op.h,
        width: op.w,
        height: op.h,
        color: rgb(1, 1, 1),
        opacity: 0.93
      });
      const lines = String(op.value || "").split("\n").slice(0, 4);
      let yCursor = pageHeight - op.y - 12;
      for (const line of lines) {
        page.drawText(line.slice(0, 90), {
          x: op.x + 2,
          y: yCursor,
          size: 10,
          font,
          color: rgb(0.1, 0.2, 0.23)
        });
        yCursor -= 11;
      }
    }

    if (op.kind === "signature") {
      const pngImage = await pdf.embedPng(op.dataUrl);
      page.drawRectangle({
        x: op.x,
        y: pageHeight - op.y - op.h,
        width: op.w,
        height: op.h,
        color: rgb(1, 1, 1),
        opacity: 0.9
      });
      page.drawImage(pngImage, {
        x: op.x,
        y: pageHeight - op.y - op.h,
        width: op.w,
        height: op.h
      });
    }

    if (op.kind === "stamp") {
      page.drawRectangle({
        x: op.x,
        y: pageHeight - op.y - op.h,
        width: op.w,
        height: op.h,
        borderColor: rgb(0.06, 0.43, 0.31),
        borderWidth: 1,
        color: rgb(0.92, 0.98, 0.95)
      });

      const lines = [
        t("sig.qualifiedStampTitle"),
        t("sig.smartIdSimulation"),
        state.values.doctorName || t("sig.doctorFallback"),
        state.values.doctorSignedAt || ""
      ];

      let yCursor = pageHeight - op.y - 12;
      for (const line of lines) {
        page.drawText(line, {
          x: op.x + 6,
          y: yCursor,
          size: 9,
          font,
          color: rgb(0.06, 0.43, 0.31)
        });
        yCursor -= 11;
      }
    }

    if (op.kind === "stampLine") {
      page.drawRectangle({
        x: op.x,
        y: pageHeight - op.y - op.h,
        width: op.w,
        height: op.h,
        color: rgb(1, 1, 1),
        opacity: 0.95
      });
      page.drawText(`${t("sig.signedDigitally")}: ${state.values.doctorName || t("sig.doctorFallback")}`, {
        x: op.x + 2,
        y: pageHeight - op.y - 14,
        size: 10,
        font,
        color: rgb(0.06, 0.43, 0.31)
      });
    }
  }

  return await pdf.save();
}

function buildOpsFromDefs(defs, options = { includeOnlyFilled: true, includeSmartStamp: true }) {
  const ops = [];
  for (const def of defs) {
    if (def.type === "signature") {
      const dataUrl = state.signatures[def.id];
      if (!dataUrl && options.includeOnlyFilled) {
        continue;
      }
      if (!dataUrl) {
        continue;
      }
      const placement = getSignaturePlacement(def.id) || def;
      ops.push({
        kind: "signature",
        page: placement.page || def.page,
        x: placement.x || def.x,
        y: placement.y || def.y,
        w: def.w,
        h: def.h,
        dataUrl
      });
      continue;
    }

    if (def.type === "stamp") {
      if (options.includeSmartStamp && state.smartId.approved) {
        ops.push({ kind: "stamp", page: def.page, x: def.x, y: def.y, w: def.w, h: def.h });
      }
      continue;
    }

    if (def.type === "stampLine") {
      if (options.includeSmartStamp && state.smartId.approved) {
        ops.push({ kind: "stampLine", page: def.page, x: def.x, y: def.y, w: def.w, h: def.h });
      }
      continue;
    }

    if (def.type === "textarea") {
      const value = String(state.values[def.id] || "");
      if (!value.trim() && options.includeOnlyFilled) {
        continue;
      }
      ops.push({ kind: "textarea", page: def.page, x: def.x, y: def.y, w: def.w, h: def.h, value });
      continue;
    }

    const value = String(state.values[def.id] || "");
    if (!value.trim() && options.includeOnlyFilled) {
      continue;
    }
    ops.push({
      kind: "text",
      page: def.page,
      x: def.x,
      y: def.y,
      w: def.w,
      h: def.h,
      fontSize: def.fontSize,
      value
    });
  }
  return ops;
}

async function buildCurrentPdfForDownload() {
  if (state.step === 1) {
    const ops = buildOpsFromDefs(fieldDefs.doc1, { includeOnlyFilled: true, includeSmartStamp: false });
    if (ops.length === 0) {
      return { bytes: state.pdfBytes.doc1Original, name: DOCS.doc1.fileName };
    }
    return {
      bytes: await stampPdf(state.pdfBytes.doc1Original, ops),
      name: "piekrisana.current-filled.pdf"
    };
  }

  if (state.step === 2) {
    const defs = fieldDefs.doc2.filter((f) => f.id !== "patientFinalSignature");
    const ops = buildOpsFromDefs(defs, { includeOnlyFilled: true, includeSmartStamp: true });
    if (ops.length === 0) {
      return { bytes: state.pdfBytes.doc2Original, name: DOCS.doc2.fileName };
    }
    return {
      bytes: await stampPdf(state.pdfBytes.doc2Original, ops),
      name: "doc2.current-filled.pdf"
    };
  }

  if (state.step === 3) {
    const base = state.pdfBytes.doc2DoctorSigned || state.pdfBytes.doc2Original;
    const sigDef = fieldDefs.doc2.find((f) => f.id === "patientFinalSignature");
    if (state.signatures.patientFinalSignature && sigDef) {
      const placement = getSignaturePlacement(sigDef.id) || sigDef;
      const ops = [{
        kind: "signature",
        page: placement.page || sigDef.page,
        x: placement.x || sigDef.x,
        y: placement.y || sigDef.y,
        w: sigDef.w,
        h: sigDef.h,
        dataUrl: state.signatures.patientFinalSignature
      }];
      return {
        bytes: await stampPdf(base, ops),
        name: "doc2.current-with-patient-signature.pdf"
      };
    }
    return { bytes: base, name: "doc2.with-doctor-sign.pdf" };
  }

  return {
    bytes: state.pdfBytes.doc2Final || state.pdfBytes.doc2DoctorSigned || state.pdfBytes.doc2Original,
    name: "doc2.final.pdf"
  };
}

async function completeStep1() {
  try {
    setPlacementMode("");
    const defs = fieldDefs.doc1;
    if (!validateFields(defs)) {
      return;
    }

    const ops = defs.map((def) => {
      if (def.type === "signature") {
        const placement = getSignaturePlacement(def.id) || def;
        return { kind: "signature", page: placement.page || def.page, x: placement.x || def.x, y: placement.y || def.y, w: def.w, h: def.h, dataUrl: state.signatures[def.id] };
      }
      return { kind: "text", page: def.page, x: def.x, y: def.y, w: def.w, h: def.h, fontSize: def.fontSize, value: state.values[def.id] || "" };
    });

    state.pdfBytes.doc1Signed = await stampPdf(state.pdfBytes.doc1Original, ops);

    if (!state.values.patientNameDoc2) {
      state.values.patientNameDoc2 = state.values.patientName;
    }
    if (!state.values.patientCodeDoc2) {
      state.values.patientCodeDoc2 = state.values.patientCode;
    }

    state.step = 2;
    await renderAll();
  } catch (err) {
    console.error(err);
    notify({
      type: "error",
      title: t("err.step1Failed"),
      message: err.message
    });
  }
}

async function completeStep2() {
  try {
    setPlacementMode("");
    const defs = fieldDefs.doc2.filter((f) => f.id !== "patientFinalSignature");
    if (!validateFields(defs, { smartIdRequired: true })) {
      return;
    }

    if (!state.values.doctorSignedAt) {
      state.values.doctorSignedAt = nowDisplay();
    }

    const ops = defs.map((def) => {
      if (def.type === "textarea") {
        return { kind: "textarea", page: def.page, x: def.x, y: def.y, w: def.w, h: def.h, value: state.values[def.id] || "" };
      }
      if (def.type === "stamp") {
        return { kind: "stamp", page: def.page, x: def.x, y: def.y, w: def.w, h: def.h };
      }
      if (def.type === "stampLine") {
        return { kind: "stampLine", page: def.page, x: def.x, y: def.y, w: def.w, h: def.h };
      }
      return { kind: "text", page: def.page, x: def.x, y: def.y, w: def.w, h: def.h, fontSize: def.fontSize, value: state.values[def.id] || "" };
    });

    state.pdfBytes.doc2DoctorSigned = await stampPdf(state.pdfBytes.doc2Original, ops);
    state.step = 3;
    await renderAll();
  } catch (err) {
    console.error(err);
    notify({
      type: "error",
      title: t("err.step2Failed"),
      message: err.message
    });
  }
}

async function completeStep3() {
  try {
    setPlacementMode("");
    const sigDef = fieldDefs.doc2.find((f) => f.id === "patientFinalSignature");
    if (!state.signatures.patientFinalSignature) {
      notify({
        type: "warn",
        title: t("warn.signatureRequired"),
        message: t("warn.addFinalSignature")
      });
      return;
    }

    const placement = getSignaturePlacement(sigDef.id) || sigDef;
    const ops = [
      {
        kind: "signature",
        page: placement.page || sigDef.page,
        x: placement.x || sigDef.x,
        y: placement.y || sigDef.y,
        w: sigDef.w,
        h: sigDef.h,
        dataUrl: state.signatures.patientFinalSignature
      }
    ];

    const base = state.pdfBytes.doc2DoctorSigned || state.pdfBytes.doc2Original;
    state.pdfBytes.doc2Final = await stampPdf(base, ops);
    state.step = 4;
    await renderAll();
  } catch (err) {
    console.error(err);
    notify({
      type: "error",
      title: t("err.step3Failed"),
      message: err.message
    });
  }
}

function downloadBytes(bytes, fileName) {
  if (!bytes) {
    notify({
      type: "warn",
      title: t("warn.noFileYet"),
      message: t("warn.noFileYetBody")
    });
    return;
  }
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 600);
}

function resetDemo() {
  state.step = 1;
  state.values = {
    consentNumber: "",
    patientName: "",
    patientCode: "",
    patientNameDoc2: "",
    patientCodeDoc2: "",
    procedureName: "",
    doctorName: "",
    extraNotes: "",
    doctorSignedAt: ""
  };
  state.signatures = {
    patientSignatureDoc1: "",
    patientFinalSignature: ""
  };
  state.smartId = {
    approved: false,
    challenge: "",
    signedAtISO: "",
    certSerial: "",
    documentHash: ""
  };
  state.pdfBytes.doc1Signed = null;
  state.pdfBytes.doc2DoctorSigned = null;
  state.pdfBytes.doc2Final = null;
  setPlacementMode("");
  state.signaturePlacements = JSON.parse(JSON.stringify(defaultSignaturePlacements));
  setStatus("");
  renderAll();
}

async function renderAll() {
  renderStepper();
  renderStepContent();
  await renderPdf();
}

document.getElementById("clearSignatureBtn").addEventListener("click", () => {
  signaturePad.clear();
});

document.getElementById("cancelSignatureBtn").addEventListener("click", () => {
  signatureModal.close();
});

document.getElementById("saveSignatureBtn").addEventListener("click", async () => {
  if (signaturePad.isEmpty()) {
    notify({
      type: "warn",
      title: t("warn.signatureMissing"),
      message: t("warn.drawSignatureFirst")
    });
    return;
  }
  const signedField = state.pendingSignatureField;
  if (!signedField) {
    notify({
      type: "error",
      title: t("err.signaturePlacementFailed"),
      message: t("err.signatureTargetMissing")
    });
    return;
  }
  state.signatures[signedField] = exportSignaturePng();
  signatureModal.close();
  setPlacementMode(signedField);
  setStatus(t("status.clickToPlace"));
  await renderAll();
  flashSignatureField(signedField);
});

placementDefaultBtn.addEventListener("click", async () => {
  const fieldId = state.activePlacementField;
  if (!fieldId) {
    return;
  }
  state.signaturePlacements[fieldId] = JSON.parse(JSON.stringify(defaultSignaturePlacements[fieldId]));
  setPlacementMode("");
  setStatus(t("status.placedDefault"));
  await renderAll();
});

placementCancelBtn.addEventListener("click", async () => {
  if (!state.activePlacementField) {
    return;
  }
  setPlacementMode("");
  setStatus(t("status.placementCanceled"));
  await renderAll();
});

langLvBtn.addEventListener("click", async () => {
  await setLanguage("lv");
});

langEnBtn.addEventListener("click", async () => {
  await setLanguage("en");
});

document.getElementById("cancelSmartIdBtn").addEventListener("click", () => {
  smartIdModal.close();
});

document.getElementById("approveSmartIdBtn").addEventListener("click", () => {
  state.smartId.approved = true;
  state.smartId.signedAtISO = new Date().toISOString();
  state.smartId.certSerial = `SIM-${Math.floor(100000 + Math.random() * 900000)}`;
  state.smartId.documentHash = randomHex(32);
  state.values.doctorSignedAt = nowDisplay();
  smartIdModal.close();
  renderAll();
});

downloadCurrentBtn.addEventListener("click", async () => {
  try {
    const payload = await buildCurrentPdfForDownload();
    downloadBytes(payload.bytes, payload.name);
  } catch (err) {
    console.error(err);
    notify({
      type: "error",
      title: t("err.downloadFailed"),
      message: err.message
    });
  }
});

window.addEventListener("resize", () => {
  clearTimeout(window.__resizeTimer);
  window.__resizeTimer = setTimeout(() => {
    renderPdf();
  }, 180);
});

(async function init() {
  try {
    applyStaticTranslations();
    await ensurePdfCache();
    await renderAll();
  } catch (err) {
    stepContentEl.innerHTML = `<div class="completion" style="background:#fff0ee;border-color:#eb8f73;">${t("err.failedInit")}: ${err.message}<br>${t("err.runServerHint")} <code>python -m http.server 5173</code></div>`;
  }
})();
