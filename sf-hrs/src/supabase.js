import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tkjmhntssbwzfjdbgona.supabase.co'
const supabaseKey = 'sb_publishable_TtRREA56cYrCju2LPjM49A_N6X7OPgB'

export const supabase = createClient(supabaseUrl, supabaseKey)
