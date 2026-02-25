import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input }  from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/useToast";

interface SubscriptionFormData {
  email: string;
  lastName: string;
  firstName: string;
  middleName?: string;
  institution: string;
}

interface NewsletterSubscriptionProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterSubscription = ({ open, onOpenChange }: NewsletterSubscriptionProps) => {
  const { toast } = useToast();
  const form = useForm<SubscriptionFormData>({
    defaultValues: {
      email: "",
      lastName: "",
      firstName: "",
      middleName: "",
      institution: "",
    },
  });

  const onSubmit = (data: SubscriptionFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Подписка оформлена",
      description: "Спасибо за подписку на новости конференции!",
    });
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Подписка на новости</DialogTitle>
          <DialogDescription>
            Получайте актуальные новости о конференции на вашу электронную почту
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField
              control={form.control}
              name="lastName"
              rules={{ required: "Введите фамилию" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Фамилия *</FormLabel>
                  <FormControl>
                    <Input placeholder="Иванов" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="firstName"
              rules={{ required: "Введите имя" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя *</FormLabel>
                  <FormControl>
                    <Input placeholder="Иван" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Отчество (при наличии)</FormLabel>
                  <FormControl>
                    <Input placeholder="Иванович" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Введите email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Некорректный email",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@mail.ru" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="institution"
              rules={{ required: "Введите учебное заведение" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Учебное заведение *</FormLabel>
                  <FormControl>
                    <Input placeholder="..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Подписаться
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterSubscription;