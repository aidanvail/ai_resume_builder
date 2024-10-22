import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from '../types';
import { PhoneInputComponent } from '../components/PhoneInput';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface PersonalInfoStepProps {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ register, errors }) => {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label>Full Name</Label>
                <Input {...register("personalDetails.fullName")} className="w-full" />
                {errors.personalDetails?.fullName &&
                    <p className="text-destructive text-sm">{errors.personalDetails.fullName.message}</p>}
            </div>

            <div className="space-y-2">
                <Label>Email</Label>
                <Input {...register("personalDetails.email")} className="w-full" />
                {errors.personalDetails?.email &&
                    <p className="text-destructive text-sm">{errors.personalDetails.email.message}</p>}
            </div>

            <PhoneInputComponent register={register} errors={errors} />

            <div className="space-y-2">
                <Label>LinkedIn URL</Label>
                <Input {...register("personalDetails.linkedin")} className="w-full" />
                {errors.personalDetails?.linkedin &&
                    <p className="text-destructive text-sm">{errors.personalDetails.linkedin.message}</p>}
            </div>

            <div className="space-y-2">
                <Label>GitHub/Portfolio URL</Label>
                <Input {...register("personalDetails.github")} className="w-full" />
                {errors.personalDetails?.github &&
                    <p className="text-destructive text-sm">{errors.personalDetails.github.message}</p>}
            </div>

            <div className="space-y-2">
                <Label>Location</Label>
                <Input {...register("personalDetails.location")} className="w-full" />
                {errors.personalDetails?.location &&
                    <p className="text-destructive text-sm">{errors.personalDetails.location.message}</p>}
            </div>
        </div>
    );
};