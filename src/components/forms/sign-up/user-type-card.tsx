import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { UserCheck } from "lucide-react";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const UserTypeCard = ({
  register,
  setUserType,
  text,
  title,
  userType,
  value,
}: Props) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          "w-full cursor-pointer",
          userType === value && "border-primary"
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                "flex justify-center p-3",
                userType == value && "border-primary"
              )}
            >
              <UserCheck
                size={24}
                className={cn(
                  userType == value ? "text-primary" : "text-gray-400`"
                )}
              />
            </Card>
            <div>
              <CardDescription
                className={cn(
                  userType == value ? "text-primary " : "text-gray-400"
                )}
              >
                {title}
              </CardDescription>
              <CardDescription
                className={cn(
                  userType == value ? "text-black text-xs " : "text-gray-400`"
                )}
              >
                {text}
              </CardDescription>
            </div>
          </div>

          <div>
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                userType == value ? "bg-secondary" : "bg-gray-600"
              )}
            ></div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;
