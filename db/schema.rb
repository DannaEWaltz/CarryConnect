# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_09_033905) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.text "summary"
    t.text "questions"
    t.integer "date"
    t.bigint "journey_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["journey_id"], name: "index_appointments_on_journey_id"
  end

  create_table "diaries", force: :cascade do |t|
    t.text "entry"
    t.text "comment"
    t.bigint "journey_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["journey_id"], name: "index_diaries_on_journey_id"
  end

  create_table "gcs", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ips", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "journeys", force: :cascade do |t|
    t.text "milestone"
    t.text "medication"
    t.text "test_results"
    t.bigint "ip_id", null: false
    t.bigint "gc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gc_id"], name: "index_journeys_on_gc_id"
    t.index ["ip_id"], name: "index_journeys_on_ip_id"
  end

  add_foreign_key "appointments", "journeys"
  add_foreign_key "diaries", "journeys"
  add_foreign_key "journeys", "gcs"
  add_foreign_key "journeys", "ips"
end
