using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AngularRampUp.Api.Models
{
    public partial class NeuPortalContext : DbContext
    {
        public NeuPortalContext(DbContextOptions<NeuPortalContext> options):base(options)
        {

        }
        public virtual DbSet<Leave> Leave { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Leave>(entity =>
            {
                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.EngagementManager).HasMaxLength(50);

                entity.Property(e => e.LeaveType).HasMaxLength(50);

                entity.Property(e => e.Project).HasMaxLength(50);

                entity.Property(e => e.StartDate).HasColumnType("date");
            });
        }
    }
}