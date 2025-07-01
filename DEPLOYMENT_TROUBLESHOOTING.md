# Deployment Troubleshooting Guide

This guide helps you troubleshoot and resolve Vercel deployment issues for the ampat-reverie project.

## ✅ Recent Fixes Applied

1. **Updated vercel.json** - Added explicit build configuration
2. **Synced lockfile** - Ensured pnpm-lock.yaml matches package.json
3. **Local build verification** - Confirmed build passes locally
4. **Git commits** - All changes properly committed and pushed

## 🔍 Current Status Check

To verify deployment status:

```bash
# 1. Check local build (should pass)
pnpm build

# 2. Check git status (should be clean)
git status

# 3. Check if all dependencies are properly installed
pnpm install --frozen-lockfile
```

## 🚨 Common Vercel Deployment Issues

### Issue 1: Package/Lockfile Mismatch

**Symptoms:** "Cannot find module" or dependency resolution errors
**Solution:**

```bash
pnpm install
git add pnpm-lock.yaml
git commit -m "Update lockfile"
git push origin main
```

### Issue 2: Node Version Mismatch

**Symptoms:** Build fails with Node.js version errors
**Current config:** Node 20 (specified in vercel.json)
**Solution:** Vercel.json already configured with Node 20

### Issue 3: Build Command Issues

**Symptoms:** Build process fails or times out
**Current config:**

- Build: `pnpm build`
- Install: `pnpm install --frozen-lockfile=false`
- Framework: Next.js (auto-detected)

### Issue 4: Environment Variables

**Check in Vercel dashboard:**

- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- Google OAuth vars (when ready)

## 📋 Deployment Checklist

### Before Each Deployment:

- [ ] Local build passes (`pnpm build`)
- [ ] All changes committed and pushed
- [ ] Environment variables set in Vercel
- [ ] Dependencies in sync (lockfile updated)

### If Deployment Fails:

1. **Check Vercel build logs** in dashboard
2. **Compare with local build** output
3. **Verify environment variables** are set
4. **Check for new dependencies** that need lockfile update
5. **Review vercel.json** configuration

## 🔧 Quick Fixes

### Reset Dependencies:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build  # Test locally
git add pnpm-lock.yaml
git commit -m "Reset and update dependencies"
git push origin main
```

### Force Vercel Rebuild:

1. Go to Vercel dashboard
2. Find your deployment
3. Click "Redeploy" with clear cache option

### Update Vercel CLI (if needed):

```bash
npm i -g vercel@latest
vercel --version
```

## 📞 Next Steps

1. **Monitor Vercel Dashboard** - Check if the latest deployment with vercel.json passes
2. **Review Build Logs** - If it still fails, check specific error messages
3. **Environment Variables** - Ensure all required env vars are set in Vercel
4. **Domain Configuration** - Update Google OAuth URIs when ready for production

## 📝 Recent Changes Log

- ✅ Added vercel.json with explicit configuration
- ✅ Updated pnpm lockfile to match package.json
- ✅ Verified local build passes
- ✅ Committed and pushed all changes
- ✅ Set Node 20 as runtime version

The deployment should now work correctly. If issues persist, check Vercel build logs for specific error messages.
