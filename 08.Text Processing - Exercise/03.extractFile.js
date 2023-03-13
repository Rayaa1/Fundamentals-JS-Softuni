function extractFile (file){
    file = file.split("\\")
    fileNameAndExtension = file.pop().split(".")
    let extension = fileNameAndExtension.pop();
	let fileName = fileNameAndExtension.join(".");
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')