import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const apiResponseMessageDtoSchema = z.object({ message: z.string() });

export class ApiResponseMessage extends createZodDto(apiResponseMessageDtoSchema) {}
//export type ApiResponseMessageDto = z.infer<typeof apiResponseMessageDtoSchema>;