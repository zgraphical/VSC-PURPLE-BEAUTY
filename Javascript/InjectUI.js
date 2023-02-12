const InjectUI = (arrayOfData, htmlElement) => {
	document.querySelector(`#${htmlElement}`).innerHTML = arrayOfData;
};

export default InjectUI;