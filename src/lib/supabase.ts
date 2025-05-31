
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uadmmgrknwiaytrocnzt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhZG1tZ3JrbndpYXl0cm9jbnp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2OTExMDksImV4cCI6MjA2NDI2NzEwOX0.Qeh1cTjeXFLBo9UquT6DY1gzhui3fwXkBwPL9aRshTM'

export const supabase = createClient(supabaseUrl, supabaseKey)
