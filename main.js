var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var remarks = document.getElementById('remarks').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var educationDuration = document.getElementById('education-duration').value;
    var additionalQualifications = document.getElementById('additional-qualifications').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var workDuration = document.getElementById('work-duration').value;
    var workAddition = document.getElementById('work-addition').value;
});
function updateResumePreview(name, email, phone, remarks, degree, institution, educationDuration, additionalQualifications, company, position, workDuration, workAddition) {
    document.getElementById('display-name').innerText = name;
    document.getElementById('display-email').innerText = email;
    document.getElementById('display-phone').innerText = phone;
    document.getElementById('display-remarks').innerText = remarks;
    document.getElementById('display-degree').innerText = degree;
    document.getElementById('display-institution').innerText = institution;
    document.getElementById('display-education-duration').innerText = educationDuration;
    document.getElementById('display-additional-qualifications').innerText = additionalQualifications;
    document.getElementById('display-company').innerText = company;
    document.getElementById('display-position').innerText = position;
    document.getElementById('display-work-duration').innerText = workDuration;
    document.getElementById('display-work-addition').innerText = workAddition;
}
function downloadResumeAsPDF() {
    var _a;
    var resumeContent = (_a = document.getElementById('Resume_preview')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (resumeContent) {
        var pdfWindow = window.open('', '_blank');
        if (pdfWindow) {
            pdfWindow.document.write("\n          <html>\n        <head>\n            <title>Resume</title>\n            <style>\n                body { \n                    font-family: Arial, sans-serif; \n                    padding: 20px; \n                    background-color: #f4f4f4; \n                }\n                h2 { \n                    color: #2c3e50; \n                    margin-bottom: 10px; \n                }\n                h3 { \n                    color: #34495e; \n                    margin-bottom: 5px; \n                }\n                p { \n                    margin-bottom: 15px; \n                    line-height: 1.6; \n                }\n                .contact-info { \n                    border-bottom: 1px solid #ccc; \n                    padding-bottom: 10px; \n                    margin-bottom: 20px; \n                }\n                .section { \n                    margin-bottom: 20px; \n                }\n                .section-title { \n                    font-weight: bold; \n                    font-size: 1.5em; \n                    margin-top: 20px; \n                }\n                .item { \n                    margin-bottom: 5px; \n                }\n            </style>\n        </head>\n        <body>\n            ".concat(resumeContent, "\n        </body>\n    </html>\n"));
            pdfWindow.document.close();
            pdfWindow.print();
        }
        else {
            alert("Unable to open PDF window. Please check your browser settings.");
        }
    }
    else {
        alert("No resume content found to download.");
    }
}
