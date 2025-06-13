import { Button } from "../ui/common/Button";
import { Input } from "../ui/common/Input";
import { Label } from "../ui/common/Label";
import { RadioGroup, RadioGroupItem } from "../ui/common/RadioGroup";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/common/Select";

// 이제 이 폼은 title과 buttonText를 외부에서 주입받는다.
interface UserInfoFormProps {
  title: string;
  buttonText: string;
}

export const UserInfoForm = ({ title, buttonText }: UserInfoFormProps) => {
  return (
    <div className="w-full bg-transparent p-1">
      <h3 className="text-h2-m text-center text-text-light mb-6">{title}</h3>
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label>성별</Label>
            <RadioGroup defaultValue="male" className="flex gap-4 pt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id={`r-male-${title}`} />
                <Label htmlFor={`r-male-${title}`}>남자</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id={`r-female-${title}`} />
                <Label htmlFor={`r-female-${title}`}>여자</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label>달력 종류</Label>
            <RadioGroup defaultValue="solar" className="flex gap-4 pt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="solar" id={`r-solar-${title}`} />
                <Label htmlFor={`r-solar-${title}`}>양력</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lunar" id={`r-lunar-${title}`} />
                <Label htmlFor={`r-lunar-${title}`}>음력</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor={`birth-year-${title}`}>생년</Label>
            <Input
              id={`birth-year-${title}`}
              placeholder="1990"
              type="number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`birth-month-${title}`}>생월</Label>
            <Input id={`birth-month-${title}`} placeholder="5" type="number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`birth-day-${title}`}>생일</Label>
            <Input id={`birth-day-${title}`} placeholder="15" type="number" />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`birth-time-${title}`}>생시</Label>
          <Select>
            <SelectTrigger id={`birth-time-${title}`}>
              <SelectValue placeholder="시간을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="unknown">모름</SelectItem>
              <SelectItem value="0">子(자)시 (23:30~01:29)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="pt-4">
          <Button className="w-full" size="lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
