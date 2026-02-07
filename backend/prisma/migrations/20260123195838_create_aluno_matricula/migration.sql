-- DropForeignKey
ALTER TABLE "Matricula" DROP CONSTRAINT "Matricula_alunoId_fkey";

-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
