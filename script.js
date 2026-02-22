const commands = [
  { name: '/join', desc: '음성 채널에 입장합니다.', group: 'music' },
  { name: '/play', desc: '음악을 재생합니다.', group: 'music' },
  { name: '/pause', desc: '음악을 일시 정지/재개합니다.', group: 'music' },
  { name: '/skip', desc: '현재 곡을 스킵합니다. (관리자)', group: 'music' },
  { name: '/loop', desc: '반복 모드를 설정합니다.', group: 'music' },
  { name: '/stop', desc: '음악을 정지하고 채널을 나갑니다.', group: 'music' },
  { name: '/queue', desc: '대기열을 확인합니다.', group: 'music' },
  { name: '/now', desc: '현재 재생 곡 정보를 확인합니다.', group: 'music' },
  { name: '/remove', desc: '대기열에서 원하는 순서를 삭제합니다.', group: 'music' },
  { name: '/shuffle', desc: '대기열을 랜덤으로 섞습니다.', group: 'music' },
  { name: '/ping', desc: '응답시간을 반환합니다.', group: 'general' },
  { name: '/say', desc: '입력한 말을 그대로 보냅니다.', group: 'general' },
  { name: '샌즈야 clear_history', desc: 'GPT 대화 기록을 초기화합니다. (소유자)', group: 'gpt' }
];

const commandList = document.getElementById('commandList');
const searchInput = document.getElementById('searchInput');

function render(list) {
  if (!commandList) return;
  commandList.innerHTML = '';

  if (list.length === 0) {
    commandList.innerHTML = '<p class="hint">검색 결과가 없습니다.</p>';
    return;
  }

  for (const cmd of list) {
    const card = document.createElement('article');
    card.className = 'command';
    card.innerHTML = `
      <h3 class="name">${cmd.name}</h3>
      <p class="desc">${cmd.desc}</p>
      <span class="tag">${cmd.group}</span>
    `;
    commandList.appendChild(card);
  }
}

if (searchInput && commandList) {
  searchInput.addEventListener('input', (event) => {
    const keyword = event.target.value.trim().toLowerCase();
    const filtered = commands.filter((cmd) =>
      cmd.name.toLowerCase().includes(keyword) || cmd.desc.toLowerCase().includes(keyword)
    );
    render(filtered);
  });

  render(commands);
}
