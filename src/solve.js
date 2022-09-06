/* ℹ️ Settings */

const result = document.getElementById("result");

const triggerSuccessCase = document.getElementById("success-case").addEventListener("click", () => {
	result.innerHTML = "Success";
});

const triggerErrorCase = document.getElementById("error-case").addEventListener("click", () => {
	result.innerHTML = "Error";
	});

/**
 * 이미지 정보 타입
 * @typedef {Object} ImageInfo
 * @property {string} url
 * @property {string} title
 * /

/* ✅ Solve Here*/


/*
 * @param {ImageInfo[]} imgs
 * @return {number}
 */
function CalcImagesTotalHeight(imgs) {
	return 0;
}
