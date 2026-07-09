// 카테고리 이름, 설명, 구글드라이브 링크는 여기에서 수정하면 됩니다.
// 현재 순서: 기타 → 리소스팩 → 맵 → 모드 → 모드팩 → 서버

const categories = [
  {
    "name": "모드",
    "icon": "🧩",
    "desc": "게임 기능을 추가하는 단일 모드 파일",
    "url": "https://drive.google.com/open?id=1rktqA_b-dVLEiqM8z7VgUvDqv0x21CEb&usp=drive_copy"
  },
  {
    "name": "모드팩",
    "icon": "🎒",
    "desc": "여러 모드를 묶어놓은 패키지",
    "url": "https://drive.google.com/open?id=1c_i-4k1cw_LZQ6NrP0vQUhjrbSe9rz9C&usp=drive_copy"
  },
  {
    "name": "리소스팩",
    "icon": "🎨",
    "desc": "텍스처, 사운드, UI 변경 파일",
    "url": "https://drive.google.com/open?id=1EfOgMLu70nXC4YcWJ9wmNadnnDFof-DZ&usp=drive_copy"
  },
  {
    "name": "맵",
    "icon": "🗺️",
    "desc": "월드맵, 세이브, 플레이용 맵 파일",
    "url": "https://drive.google.com/open?id=1Ama1Lf6DmflTz9RpLiuqik80y5eUb6se&usp=drive_copy"
  },
  {
    "name": "서버",
    "icon": "📦",
    "desc": "서버팩, 서버 파일, 서버 관련 자료",
    "url": "https://drive.google.com/open?id=10F3L3v4jeid_4zSNLAEju9XsXnWsWZFY&usp=drive_copy"
  },
  {
    "name": "기타",
    "icon": "📁",
    "desc": "아직 분류하지 않은 게임 파일",
    "url": "https://drive.google.com/open?id=1i_Uzg_oTYhnAFiWLc_v1y-gRnpWuqGaF&usp=drive_copy"
  }
];

const categoryGrid = document.querySelector("#categoryGrid");
const categoryCount = document.querySelector("#categoryCount");

document.addEventListener("DOMContentLoaded", () => {
  categoryCount.textContent = categories.length;
  renderCategories();
});

function renderCategories() {
  categoryGrid.innerHTML = categories
    .map((category) => `
      <button class="category-card" type="button" data-url="${escapeHTML(category.url)}" aria-label="${escapeHTML(category.name)} 구글드라이브 열기">
        <span class="icon">${category.icon}</span>
        <strong>${escapeHTML(category.name)}</strong>
        <p>${escapeHTML(category.desc)}</p>
        <small>구글드라이브 폴더 열기 ↗</small>
      </button>
    `)
    .join("");

  categoryGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".category-card");
    if (!card) return;

    const url = card.dataset.url;
    if (!url) {
      alert("아직 연결된 구글드라이브 링크가 없습니다.");
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  });
}

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
