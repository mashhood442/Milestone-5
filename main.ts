document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const remarks = (document.getElementById('remarks') as HTMLTextAreaElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const educationDuration = (document.getElementById('education-duration') as HTMLInputElement).value;
    const additionalQualifications = (document.getElementById('additional-qualifications') as HTMLTextAreaElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const workDuration = (document.getElementById('work-duration') as HTMLInputElement).value;
    const workAddition = (document.getElementById('work-addition') as HTMLTextAreaElement).value;

});

function updateResumePreview(name: string, email: string, phone: string, remarks: string, degree: string, institution: string, educationDuration: string, additionalQualifications: string, company: string, position: string, workDuration: string, workAddition: string) {
    document.getElementById('display-name')!.innerText = name;
    document.getElementById('display-email')!.innerText = email;
    document.getElementById('display-phone')!.innerText = phone;
    document.getElementById('display-remarks')!.innerText = remarks;
    document.getElementById('display-degree')!.innerText = degree;
    document.getElementById('display-institution')!.innerText = institution;
    document.getElementById('display-education-duration')!.innerText = educationDuration;
    document.getElementById('display-additional-qualifications')!.innerText = additionalQualifications;
    document.getElementById('display-company')!.innerText = company;
    document.getElementById('display-position')!.innerText = position;
    document.getElementById('display-work-duration')!.innerText = workDuration;
    document.getElementById('display-work-addition')!.innerText = workAddition;
}

function downloadResumeAsPDF() {
    const resumeContent = document.getElementById('Resume_preview')?.innerHTML;

    if (resumeContent) {
        const pdfWindow = window.open('', '_blank');
        
        if (pdfWindow) {
            pdfWindow.document.write(`
          <html>
        <head>
            <title>Resume</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-color: #f4f4f4; 
                }
                h2 { 
                    color: #2c3e50; 
                    margin-bottom: 10px; 
                }
                h3 { 
                    color: #34495e; 
                    margin-bottom: 5px; 
                }
                p { 
                    margin-bottom: 15px; 
                    line-height: 1.6; 
                }
                .contact-info { 
                    border-bottom: 1px solid #ccc; 
                    padding-bottom: 10px; 
                    margin-bottom: 20px; 
                }
                .section { 
                    margin-bottom: 20px; 
                }
                .section-title { 
                    font-weight: bold; 
                    font-size: 1.5em; 
                    margin-top: 20px; 
                }
                .item { 
                    margin-bottom: 5px; 
                }
            </style>
        </head>
        <body>
            ${resumeContent}
        </body>
    </html>
`);
            pdfWindow.document.close();
            pdfWindow.print();
        } else {
            alert("Unable to open PDF window. Please check your browser settings.");
        }
    } else {
        alert("No resume content found to download.");
    }
}
