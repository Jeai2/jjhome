import { UserInfoForm } from "@/components/forms/UserInfoForm";

export const JonghapSajuPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* 1. 왼쪽: 시각적 유혹 (이미지) */}
      <div className="w-full h-[500px] rounded-2xl overflow-hidden">
        <img
          src="https://placehold.co/800x1000/0B0F1A/D1B681?text=Mystic+Art"
          alt="Mystical illustration for Saju"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. 오른쪽: 가치 제안 및 행동 촉구 (설명, 폼) */}
      <div className="flex flex-col justify-center">
        <div>
          <p className="text-accent-gold font-semibold">종합사주</p>
          <h1 className="text-h1-xl text-text-light mt-2">
            당신의 삶 전체를 관통하는
            <br />
            운명의 지도를 펼쳐보세요.
          </h1>
          <p className="text-text-muted mt-4 max-w-lg">
            태어난 순간 정해진 당신의 기운을 분석하여, 재물, 연애, 건강 등 삶의
            모든 측면에 대한 깊이 있는 통찰과 조언을 제공합니다. 미래를 준비하고
            기회를 잡으세요.
          </p>
        </div>

        <div className="mt-8">
          <UserInfoForm title="종합사주" buttonText="운세 보기" />
        </div>
      </div>
    </div>
  );
};
