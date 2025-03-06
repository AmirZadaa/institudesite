import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "courses" ALTER COLUMN "slug" SET NOT NULL;
  ALTER TABLE "courses" ALTER COLUMN "sub_title" SET NOT NULL;
  ALTER TABLE "courses" ALTER COLUMN "difficulty_level" SET DEFAULT 'Beginner';
  ALTER TABLE "courses" ALTER COLUMN "render_style" SET DEFAULT 'style-1';
  ALTER TABLE "courses" ALTER COLUMN "course_format" SET DEFAULT 'medium';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "courses" ALTER COLUMN "slug" DROP NOT NULL;
  ALTER TABLE "courses" ALTER COLUMN "sub_title" DROP NOT NULL;
  ALTER TABLE "courses" ALTER COLUMN "difficulty_level" DROP DEFAULT;
  ALTER TABLE "courses" ALTER COLUMN "render_style" DROP DEFAULT;
  ALTER TABLE "courses" ALTER COLUMN "course_format" DROP DEFAULT;`)
}
