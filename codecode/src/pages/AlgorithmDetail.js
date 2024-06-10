import { Text, Heading  } from "@chakra-ui/react";
import Bodybox from "components/common/Bodybox";
import Roundbox from "components/common/Roundbox";

const dummyData = {
  code: "200",
  message: "Success",
  data: {
    id: 1,
    title: "Stable marriage problem",
    content: `### 문제 정의:

n명의 남성과 n명의 여성이 있습니다.
각 남성은 모든 여성에 대한 선호도 순위를 가지고 있고, 각 여성도 모든 남성에 대한 선호도 순위를 가지고 있습니다.
목표는 모든 남성과 여성을 짝지어, 어떤 남녀 쌍도 서로 현재 파트너보다 더 선호하는 상대가 없는 "안정적인" 짝짓기를 찾는 것입니다.

### Gale-Shapley 알고리즘:

안정적인 결혼 문제를 해결하는 가장 대표적인 알고리즘은 Gale-Shapley 알고리즘입니다. 이 알고리즘은 다음과 같은 방식으로 작동합니다.

1. 모든 남성은 아직 청혼하지 않은 상태로 시작합니다.
2. 자유로운 남성은 자신의 선호도 목록에서 가장 선호하는 여성에게 청혼합니다.
3. 여성은 청혼을 받으면 다음과 같이 행동합니다.
4. 아직 청혼을 받지 않았거나 현재 파트너보다 청혼한 남성을 더 선호하면 청혼을 수락하고 현재 파트너와의 관계를 끊습니다.
5. 현재 파트너를 더 선호하면 청혼을 거절합니다.
6. 모든 남성이 짝을 찾거나 더 이상 청혼할 여성이 없을 때까지 2-3 단계를 반복합니다.

### python code
def gale_shapley(men_preferences, women_preferences):
    // Gale-Shapley 알고리즘을 사용하여 안정적인 짝짓기를 찾습니다.

    // Args:
    //     men_preferences: 각 남성의 여성 선호도 목록 (2차원 리스트)
    //     women_preferences: 각 여성의 남성 선호도 목록 (2차원 리스트)

    // Returns:
    //     안정적인 짝짓기 결과 (딕셔너리)


    n = len(men_preferences)
    free_men = list(range(n))  # 자유로운 남성 목록
    women_partners = [-1] * n  # 여성의 현재 파트너 (-1은 짝이 없는 상태)
    next_proposal = [0] * n  # 각 남성의 다음 청혼 대상 인덱스

    while free_men:
        man = free_men.pop()
        woman = men_preferences[man][next_proposal[man]]
        next_proposal[man] += 1  # 다음 청혼 대상으로 이동

        if women_partners[woman] == -1:  # 여성이 짝이 없는 경우
            women_partners[woman] = man
        else:
            current_partner = women_partners[woman]
            if women_preferences[woman].index(man) < women_preferences[woman].index(current_partner):
                # 현재 파트너보다 청혼한 남성을 더 선호하는 경우
                women_partners[woman] = man
                free_men.append(current_partner)  # 현재 파트너는 다시 자유롭게 됨

    return {man: woman for woman, man in enumerate(women_partners)}

  // 예시
  men_preferences = [[0, 1, 2], [1, 2, 0], [0, 2, 1]]  # 남성 선호도
  women_preferences = [[2, 1, 0], [0, 2, 1], [1, 0, 2]]  # 여성 선호도
  
  result = gale_shapley(men_preferences, women_preferences)
  print(result)  # {0: 2, 1: 0, 2: 1}

### 코드 설명:

gale_shapley 함수는 남성과 여성의 선호도 목록을 입력으로 받습니다.
free_men, women_partners, next_proposal 리스트를 초기화합니다.
자유로운 남성이 없을 때까지 반복합니다.
자유로운 남성 man을 선택하고, 선호도 목록에서 다음 청혼 대상 woman을 선택합니다.
여성의 현재 파트너 상태에 따라 다음과 같이 처리합니다.
짝이 없는 경우: 남성과 짝을 맺습니다.
현재 파트너보다 청혼한 남성을 더 선호하는 경우: 파트너를 변경하고, 기존 파트너는 다시 자유롭게 됩니다.
현재 파트너를 더 선호하는 경우: 청혼을 거절합니다.
최종적으로 안정적인 짝짓기 결과를 딕셔너리 형태로 반환합니다. (예: {0: 2, 1: 0, 2: 1}) 

Generated by Gemini
`,
  updated_at: "2024-06-11T12:30:00Z"
  },
};

const AlgorithmDtail = () => {
  const data = dummyData.data;
  return (
    <Bodybox w={2000}>
      <Roundbox>
        <Heading  fontSize='3xl' pb={3}>{data.title}</Heading >
        <Text whiteSpace="pre-wrap">{data.content}</Text>
      </Roundbox>
    </Bodybox>
  );
}

export default AlgorithmDtail;